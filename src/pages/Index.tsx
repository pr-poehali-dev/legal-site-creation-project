import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scale" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">МиграПраво</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">Команда</button>
            <button onClick={() => scrollToSection('cases')} className="text-foreground hover:text-primary transition-colors">Кейсы</button>
            <button onClick={() => scrollToSection('publications')} className="text-foreground hover:text-primary transition-colors">Публикации</button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            <Button onClick={() => scrollToSection('consultation')}>Консультация</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('team')} className="text-left text-foreground hover:text-primary transition-colors">Команда</button>
              <button onClick={() => scrollToSection('cases')} className="text-left text-foreground hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('publications')} className="text-left text-foreground hover:text-primary transition-colors">Публикации</button>
              <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary transition-colors">Контакты</button>
              <Button onClick={() => scrollToSection('consultation')} className="w-full">Консультация</Button>
            </div>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in">Миграционное право</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Ваш надёжный партнёр<br />в миграционных вопросах
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональная юридическая помощь в получении виз, разрешений на работу и видов на жительство
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" onClick={() => scrollToSection('consultation')}>
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                МиграПраво — ведущая юридическая компания, специализирующаяся на миграционном праве с 2015 года.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы помогли более 2000 клиентов успешно решить вопросы легализации пребывания, получения разрешений на работу и гражданства.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Успешных дел</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">9</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl h-96 overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/acb453d7-3eaa-41bd-abf7-3bb420d5faa8/files/5839d7c5-af1f-4ead-83a1-177e5f7c249b.jpg" 
                alt="Офис МиграПраво"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг по миграционному праву
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" className="text-primary" size={24} />
                </div>
                <CardTitle>Получение виз</CardTitle>
                <CardDescription>
                  Оформление туристических, рабочих и студенческих виз
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="text-primary" size={24} />
                </div>
                <CardTitle>Разрешение на работу</CardTitle>
                <CardDescription>
                  Помощь в получении разрешений на работу и патентов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" className="text-primary" size={24} />
                </div>
                <CardTitle>Вид на жительство</CardTitle>
                <CardDescription>
                  Оформление временного и постоянного вида на жительство
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>Воссоединение семьи</CardTitle>
                <CardDescription>
                  Юридическое сопровождение процедуры воссоединения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-primary" size={24} />
                </div>
                <CardTitle>Студенческие визы</CardTitle>
                <CardDescription>
                  Оформление документов для обучения за рубежом
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <CardTitle>Гражданство</CardTitle>
                <CardDescription>
                  Консультации и помощь в получении гражданства
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытные юристы с глубокими знаниями миграционного законодательства
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={64} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Анна Петрова</h3>
                <p className="text-muted-foreground text-center mb-3">Управляющий партнёр</p>
                <p className="text-sm text-center text-muted-foreground">
                  15 лет опыта в миграционном праве, специализация на сложных кейсах
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={64} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Дмитрий Соколов</h3>
                <p className="text-muted-foreground text-center mb-3">Старший юрист</p>
                <p className="text-sm text-center text-muted-foreground">
                  10 лет опыта, эксперт по рабочим визам и разрешениям
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={64} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Елена Морозова</h3>
                <p className="text-muted-foreground text-center mb-3">Юрист-консультант</p>
                <p className="text-sm text-center text-muted-foreground">
                  7 лет опыта, специализация на семейной миграции
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Успешные кейсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры нашей работы и достижений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Рабочая виза</Badge>
                <CardTitle>Получение визы для IT-специалиста</CardTitle>
                <CardDescription>
                  Успешное оформление рабочей визы в Германию для разработчика с семьёй за 45 дней
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Срок: 45 дней</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">ВНЖ</Badge>
                <CardTitle>Вид на жительство для предпринимателя</CardTitle>
                <CardDescription>
                  Оформление ВНЖ в Испании для владельца бизнеса и членов семьи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Срок: 3 месяца</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Воссоединение</Badge>
                <CardTitle>Воссоединение семьи в Канаде</CardTitle>
                <CardDescription>
                  Помощь в процедуре воссоединения супругов с последующим получением ПМЖ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Срок: 6 месяцев</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Студенческая виза</Badge>
                <CardTitle>Виза для обучения в США</CardTitle>
                <CardDescription>
                  Оформление студенческой визы F-1 для магистратуры в университете
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Срок: 2 месяца</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="publications" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Публикации</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи и актуальная информация по миграционному праву
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">15 октября 2024</div>
                <CardTitle className="text-lg">Новые правила получения рабочих виз в ЕС</CardTitle>
                <CardDescription>
                  Обзор изменений в законодательстве Евросоюза с 2024 года
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">8 октября 2024</div>
                <CardTitle className="text-lg">Как подготовиться к интервью на визу</CardTitle>
                <CardDescription>
                  Практические советы и рекомендации от наших экспертов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">1 октября 2024</div>
                <CardTitle className="text-lg">Топ-5 ошибок при подаче документов</CardTitle>
                <CardDescription>
                  Разбор частых ошибок и как их избежать при оформлении
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Получить консультацию</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (900) 000-00-00" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Опишите вашу ситуацию</label>
                  <Textarea 
                    placeholder="Расскажите о вашей миграционной ситуации и какая помощь вам нужна"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 10</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@migra-pravo.ru</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" size={24} />
                <span className="text-xl font-bold">МиграПраво</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональные юридические услуги в сфере миграционного права
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Визы</li>
                <li>Разрешения на работу</li>
                <li>Вид на жительство</li>
                <li>Гражданство</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Кейсы</li>
                <li>Публикации</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@migra-pravo.ru</li>
                <li>г. Москва, ул. Тверская, д. 10</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            © 2024 МиграПраво. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}