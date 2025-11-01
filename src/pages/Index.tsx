import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    {
      icon: "FileText",
      title: "Миграционное право",
      description: "Оформление виз, РВП, ВНЖ и гражданства. Полное сопровождение миграционных процедур."
    },
    {
      icon: "Briefcase",
      title: "Бизнес-иммиграция",
      description: "Помощь в регистрации компаний, получении бизнес-виз и открытии счетов."
    },
    {
      icon: "Users",
      title: "Семейное право",
      description: "Воссоединение семьи, легализация брака, усыновление и опека."
    },
    {
      icon: "Scale",
      title: "Судебное представительство",
      description: "Защита интересов в миграционных спорах и апелляционных процессах."
    },
    {
      icon: "Building2",
      title: "Корпоративное право",
      description: "Юридическое сопровождение бизнеса, договоры, консультации."
    },
    {
      icon: "ShieldCheck",
      title: "Легализация документов",
      description: "Апостиль, нотариальное заверение, переводы документов."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scale" className="text-primary" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-foreground">ЮрПартнер</h1>
              <p className="text-xs text-muted-foreground">Миграционные и юридические услуги</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Профессиональная правовая помощь в миграционных вопросах
              </h2>
              <p className="text-lg text-muted-foreground">
                Более 10 лет успешной практики. Помогаем людям и бизнесу решать сложные юридические задачи.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Send" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Info" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Успешных дел</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/acb453d7-3eaa-41bd-abf7-3bb420d5faa8/files/9cef11a2-0666-48e8-b310-ae06ade4c58d.jpg" 
                alt="Юридический офис" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={32} />
                  <div>
                    <div className="font-bold">Лицензированные</div>
                    <div className="text-sm">специалисты</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексное юридическое сопровождение для физических и юридических лиц
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/acb453d7-3eaa-41bd-abf7-3bb420d5faa8/files/f08d71a2-29eb-40d0-955e-e0572cd20ce3.jpg" 
                alt="Команда юристов" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-bold">Почему выбирают нас</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Опытные специалисты</h4>
                    <p className="text-muted-foreground">Наша команда имеет многолетний опыт в миграционном и корпоративном праве</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Быстрое решение задач</h4>
                    <p className="text-muted-foreground">Оперативно обрабатываем запросы и сокращаем сроки оформления документов</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Гарантия результата</h4>
                    <p className="text-muted-foreground">Берем на себя ответственность и работаем до достижения положительного результата</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Wallet" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Прозрачное ценообразование</h4>
                    <p className="text-muted-foreground">Фиксированная стоимость услуг без скрытых платежей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Получить консультацию</h3>
              <p className="text-muted-foreground">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
            </div>
            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя *" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email *" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон *" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите вашу ситуацию"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={20} className="mr-2" />
                        Отправить заявку
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" className="text-accent" size={32} />
                <span className="text-xl font-bold">ЮрПартнер</span>
              </div>
              <p className="text-sm text-background/70">
                Профессиональные юридические услуги с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Миграционное право</li>
                <li>Бизнес-иммиграция</li>
                <li>Семейное право</li>
                <li>Корпоративное право</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@urpartner.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Пн-Пт: 9:00 - 19:00</li>
                <li>Сб: 10:00 - 16:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            <p>&copy; 2024 ЮрПартнер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
