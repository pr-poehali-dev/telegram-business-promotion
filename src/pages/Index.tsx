import { useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const services = [
    {
      icon: 'Bot',
      title: 'Чат-боты',
      description: 'Умные боты для автоматизации общения с клиентами 24/7'
    },
    {
      icon: 'Brain',
      title: 'AI-ассистенты',
      description: 'Интеллектуальные помощники на базе искусственного интеллекта'
    },
    {
      icon: 'Zap',
      title: 'Автоворонки продаж',
      description: 'Автоматические воронки для увеличения конверсии'
    },
    {
      icon: 'Smartphone',
      title: 'MiniApp',
      description: 'Полноценные приложения внутри Telegram'
    },
    {
      icon: 'Target',
      title: 'Реклама',
      description: 'Настройка и ведение рекламных кампаний в Telegram'
    },
    {
      icon: 'TrendingUp',
      title: 'Продвижение',
      description: 'Комплексное продвижение бизнеса в экосистеме Telegram'
    }
  ];

  const portfolio = [
    {
      title: 'Автоматизация e-commerce',
      description: 'Разработали бота для интернет-магазина с интеграцией оплаты',
      metrics: '+340% конверсия'
    },
    {
      title: 'AI-консультант',
      description: 'Создали умного ассистента для консалтинговой компании',
      metrics: '24/7 поддержка'
    },
    {
      title: 'MiniApp для доставки',
      description: 'Полноценное приложение заказа еды внутри Telegram',
      metrics: '10К+ заказов/месяц'
    }
  ];

  const blog = [
    {
      title: 'Как увеличить продажи через Telegram-бота',
      date: '15 ноября 2025',
      tags: ['Боты', 'Продажи']
    },
    {
      title: 'MiniApp vs веб-сайт: что выбрать?',
      date: '10 ноября 2025',
      tags: ['MiniApp', 'Разработка']
    },
    {
      title: 'AI в бизнесе: реальные кейсы',
      date: '5 ноября 2025',
      tags: ['AI', 'Автоматизация']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <MatrixBackground />
      
      <div className="relative z-10">
        <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient">TG.PRO</div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90">
              Связаться
            </Button>
          </div>
        </header>

        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="text-center max-w-5xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ПРОДВИЖЕНИЕ<br />
              <span className="text-gradient">БИЗНЕСА В TELEGRAM</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Создаём чат-боты, AI-ассистенты и MiniApp для автоматизации вашего бизнеса
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg px-8">
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Портфолио
              </Button>
            </div>
            <div className="mt-12 text-sm text-muted-foreground">
              Скорость. <span className="text-primary">Синергия.</span> Синхронизация.
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
              Наши услуги
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              О нас
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Мы не просто кодим. Мы ловим ваш вайб и настраиваем процессы, 
              которые работают на одной волне с вашим бизнесом.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">150+</div>
                <div className="text-muted-foreground">Реализованных проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">5 лет</div>
                <div className="text-muted-foreground">Опыта в разработке</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
              Портфолио
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.map((project, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-secondary transition-all">
                  <CardContent className="p-6">
                    <div className="text-accent font-bold mb-2">{project.metrics}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
              Блог
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blog.map((post, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">
              Связаться с нами
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами в течение 24 часов
            </p>
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-border">
          <div className="container mx-auto text-center text-muted-foreground">
            <div className="text-2xl font-bold text-gradient mb-4">TG.PRO</div>
            <p className="mb-4">Продвижение бизнеса в Telegram</p>
            <div className="flex justify-center gap-6 mb-4">
              <a href="https://t.me/" className="hover:text-primary transition-colors">
                <Icon name="Send" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Phone" size={24} />
              </a>
            </div>
            <p className="text-sm">© 2025 TG.PRO. Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
