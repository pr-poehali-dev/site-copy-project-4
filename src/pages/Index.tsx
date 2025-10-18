import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DevStudio
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              Портфолио
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              О нас
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              Связаться
            </Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                Разработка под ключ
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Создаём{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  цифровые
                </span>{" "}
                продукты будущего
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Разрабатываем веб-приложения, мобильные приложения и программное обеспечение для бизнеса любого масштаба
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Начать проект
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:bg-card">
                  Наши кейсы
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary">50+</div>
                  <div className="text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">5 лет</div>
                  <div className="text-muted-foreground">На рынке</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/d6831277-1388-4112-a72e-f0030d37c495/files/bc010e44-dcb0-4cbc-a0ad-73e78218c9ad.jpg"
                alt="Technology"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Наши услуги
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Полный цикл разработки
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От идеи до запуска: разрабатываем решения, которые работают
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-background border border-border rounded-2xl hover:border-primary transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="Globe" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Веб-приложения</h3>
              <p className="text-muted-foreground leading-relaxed">
                Создаём современные веб-платформы с использованием React, Next.js и других передовых технологий
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl hover:border-secondary transition-all group">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Icon name="Smartphone" size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Мобильные приложения</h3>
              <p className="text-muted-foreground leading-relaxed">
                Разрабатываем нативные и кросс-платформенные приложения для iOS и Android
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl hover:border-primary transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="Code" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Разработка ПО</h3>
              <p className="text-muted-foreground leading-relaxed">
                Создаём индивидуальные программные решения для автоматизации бизнес-процессов
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl hover:border-secondary transition-all group">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Icon name="Database" size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Backend разработка</h3>
              <p className="text-muted-foreground leading-relaxed">
                Проектируем масштабируемые серверные решения и API для ваших продуктов
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl hover:border-primary transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="Palette" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">UI/UX дизайн</h3>
              <p className="text-muted-foreground leading-relaxed">
                Создаём интуитивные интерфейсы, которые пользователи любят использовать
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl hover:border-secondary transition-all group">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Icon name="Zap" size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Консалтинг</h3>
              <p className="text-muted-foreground leading-relaxed">
                Помогаем выбрать оптимальный технологический стек и архитектуру проекта
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
              Портфолио
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Проекты, которыми гордимся
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all">
              <img
                src="https://cdn.poehali.dev/projects/d6831277-1388-4112-a72e-f0030d37c495/files/25fc8704-d99b-4901-82fa-b9543e74ffd0.jpg"
                alt="Project"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Платформа для e-commerce</h3>
                <p className="text-muted-foreground mb-4">
                  Полнофункциональный маркетплейс с интеграцией платёжных систем
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-secondary transition-all">
              <img
                src="https://cdn.poehali.dev/projects/d6831277-1388-4112-a72e-f0030d37c495/files/810f244d-b863-4604-8b73-899b08ea03e3.jpg"
                alt="Project"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Корпоративная CRM-система</h3>
                <p className="text-muted-foreground mb-4">
                  Система управления взаимоотношениями с клиентами для крупного холдинга
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                О компании
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Команда экспертов с опытом работы в крупных IT-компаниях
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Мы объединили талантливых разработчиков, дизайнеров и менеджеров, которые работали в Google, Яндекс, Mail.ru и других технологических гигантах.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Наш подход основан на современных практиках разработки: Agile, CI/CD, code review и тестирование. Мы создаём не просто код — мы создаём продукты, которые решают бизнес-задачи.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Гарантия качества</div>
                    <div className="text-sm text-muted-foreground">Тестирование на всех этапах</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Сроки</div>
                    <div className="text-sm text-muted-foreground">Точные оценки и дедлайны</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Безопасность</div>
                    <div className="text-sm text-muted-foreground">Защита данных приоритет</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Поддержка</div>
                    <div className="text-sm text-muted-foreground">24/7 техническая помощь</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl rounded-full"></div>
              <div className="relative bg-background border border-border rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl"></div>
                  <div>
                    <div className="font-bold text-lg">Современный стек</div>
                    <div className="text-muted-foreground">React, Next.js, TypeScript</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl"></div>
                  <div>
                    <div className="font-bold text-lg">Agile методология</div>
                    <div className="text-muted-foreground">Гибкая разработка</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl"></div>
                  <div>
                    <div className="font-bold text-lg">Cloud решения</div>
                    <div className="text-muted-foreground">AWS, Google Cloud, Azure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы обсудим ваши идеи. Первая консультация — бесплатно!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать нам
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-card/50 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                DevStudio
              </div>
              <p className="text-muted-foreground">
                Создаём цифровые продукты, которые меняют бизнес
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Мобильные приложения</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Backend</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>info@devstudio.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 DevStudio. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
