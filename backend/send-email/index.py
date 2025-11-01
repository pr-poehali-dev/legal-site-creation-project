import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr, field_validator

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=20)
    message: str = Field(default="", max_length=1000)
    
    @field_validator('phone')
    @classmethod
    def validate_phone(cls, v: str) -> str:
        cleaned = ''.join(filter(str.isdigit, v))
        if len(cleaned) < 5:
            raise ValueError('Phone number too short')
        return v

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send email notification when client submits contact form
    Args: event - dict with httpMethod, body, headers
          context - object with request_id, function_name attributes
    Returns: HTTP response dict with statusCode, headers, body
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    recipient_email = os.environ.get('RECIPIENT_EMAIL')
    
    if not all([smtp_host, smtp_user, smtp_password, recipient_email]):
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Email configuration missing'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    contact_request = ContactRequest(**body_data)
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка от {contact_request.name}'
    msg['From'] = smtp_user
    msg['To'] = recipient_email
    
    html_body = f"""
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #4169E1; border-bottom: 2px solid #4169E1; padding-bottom: 10px;">
            📧 Новая заявка с сайта
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <p><strong>👤 Имя:</strong> {contact_request.name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:{contact_request.email}">{contact_request.email}</a></p>
            <p><strong>📱 Телефон:</strong> <a href="tel:{contact_request.phone}">{contact_request.phone}</a></p>
            
            {f'<p><strong>💬 Сообщение:</strong></p><p style="background-color: #f5f5f5; padding: 15px; border-left: 3px solid #4169E1; margin-top: 10px;">{contact_request.message}</p>' if contact_request.message else ''}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px;">
              ⚡ <strong>Рекомендация:</strong> Свяжитесь с клиентом в течение 15 минут для максимальной конверсии
            </p>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;">
            Заявка получена через форму обратной связи на сайте
          </p>
        </div>
      </body>
    </html>
    """
    
    msg.attach(MIMEText(html_body, 'html'))
    
    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'message': 'Email sent successfully'
        })
    }
