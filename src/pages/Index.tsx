import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            DevStudio
          </motion.div>
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
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a 
                href="#services" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#portfolio" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Портфолио
              </a>
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </a>
              <Button 
                className="bg-primary hover:bg-primary/90 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Связаться
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium"
              >
                Разработка под ключ
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Создаём{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  цифровые
                </span>{" "}
                продукты будущего
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Разрабатываем веб-приложения, мобильные приложения и программное обеспечение для бизнеса любого масштаба
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Начать проект
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:bg-card">
                  Наши кейсы
                </Button>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="flex items-center gap-8 pt-8"
              >
                <div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-4xl font-bold text-primary"
                  >
                    150+
                  </motion.div>
                  <div className="text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-4xl font-bold text-secondary"
                  >
                    50+
                  </motion.div>
                  <div className="text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-4xl font-bold text-primary"
                  >
                    5 лет
                  </motion.div>
                  <div className="text-muted-foreground">На рынке</div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"
              ></motion.div>
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="https://cdn.poehali.dev/projects/d6831277-1388-4112-a72e-f0030d37c495/files/bc010e44-dcb0-4cbc-a0ad-73e78218c9ad.jpg"
                alt="Technology"
                className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Наши услуги
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Полный цикл разработки
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От идеи до запуска: разрабатываем решения, которые работают
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Globe", title: "Веб-приложения", desc: "Создаём современные веб-платформы с использованием React, Next.js и других передовых технологий", color: "primary" },
              { icon: "Smartphone", title: "Мобильные приложения", desc: "Разрабатываем нативные и кросс-платформенные приложения для iOS и Android", color: "secondary" },
              { icon: "Code", title: "Разработка ПО", desc: "Создаём индивидуальные программные решения для автоматизации бизнес-процессов", color: "primary" },
              { icon: "Database", title: "Backend разработка", desc: "Проектируем масштабируемые серверные решения и API для ваших продуктов", color: "secondary" },
              { icon: "Palette", title: "UI/UX дизайн", desc: "Создаём интуитивные интерфейсы, которые пользователи любят использовать", color: "primary" },
              { icon: "Zap", title: "Консалтинг", desc: "Помогаем выбрать оптимальный технологический стек и архитектуру проекта", color: "secondary" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 bg-background border border-border rounded-2xl hover:border-${service.color} transition-all group cursor-pointer`}
              >
                <div className={`w-14 h-14 bg-${service.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${service.color}/20 transition-colors`}>
                  <Icon name={service.icon as any} size={28} className={`text-${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
              Портфолио
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Проекты, которыми гордимся
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://cdn.poehali.dev/projects/d6831277-1388-4112-a72e-f0030d37c495/files/25fc8704-d99b-4901-82fa-b9543e74ffd0.jpg"
                  alt="Project"
                  className="w-full h-80 object-cover"
                />
              </div>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-secondary transition-all cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://cdn.poehali.dev/projects/d6831277-1388-4112-a72e-f0030d37c495/files/810f244d-b863-4604-8b73-899b08ea03e3.jpg"
                  alt="Project"
                  className="w-full h-80 object-cover"
                />
              </div>
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
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
                {[
                  { icon: "Check", title: "Гарантия качества", desc: "Тестирование на всех этапах", color: "primary" },
                  { icon: "Clock", title: "Сроки", desc: "Точные оценки и дедлайны", color: "secondary" },
                  { icon: "Shield", title: "Безопасность", desc: "Защита данных приоритет", color: "primary" },
                  { icon: "Headphones", title: "Поддержка", desc: "24/7 техническая помощь", color: "secondary" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-10 h-10 bg-${item.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={item.icon as any} size={20} className={`text-${item.color}`} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl rounded-full"
              ></motion.div>
              <div className="relative bg-background border border-border rounded-2xl p-8 space-y-6">
                {[
                  { title: "Современный стек", desc: "React, Next.js, TypeScript" },
                  { title: "Agile методология", desc: "Гибкая разработка" },
                  { title: "Cloud решения", desc: "AWS, Google Cloud, Azure" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div 
                      animate={{ 
                        background: [
                          "linear-gradient(135deg, hsl(280 100% 65%), hsl(200 100% 50%))",
                          "linear-gradient(135deg, hsl(200 100% 50%), hsl(280 100% 65%))",
                          "linear-gradient(135deg, hsl(280 100% 65%), hsl(200 100% 50%))"
                        ]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-16 h-16 rounded-xl"
                    ></motion.div>
                    <div>
                      <div className="font-bold text-lg">{item.title}</div>
                      <div className="text-muted-foreground">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-center relative overflow-hidden"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"
            ></motion.div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Готовы начать проект?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами, и мы обсудим ваши идеи. Первая консультация — бесплатно!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Написать нам
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-card/50 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                DevStudio
              </div>
              <p className="text-muted-foreground">
                Создаём цифровые продукты, которые меняют бизнес
              </p>
            </motion.div>
            {[
              { title: "Услуги", links: ["Веб-разработка", "Мобильные приложения", "Backend"] },
              { title: "Компания", links: ["О нас", "Портфолио", "Карьера"] },
              { title: "Контакты", links: ["info@devstudio.ru", "+7 (495) 123-45-67", "Москва, ул. Примерная, 1"] }
            ].map((column, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                <h4 className="font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-foreground transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 DevStudio. Все права защищены.
            </p>
            <div className="flex gap-4">
              {["Github", "Linkedin", "Twitter"].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name={social as any} size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
