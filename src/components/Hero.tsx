import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary to-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Красота начинается
                <span className="text-primary block">с BeautyTime</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Профессиональная косметология с индивидуальным подходом.
                Современные технологии и забота о каждом клиенте.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="beauty-button-accent inline-flex items-center justify-center space-x-2"
              >
                <Icon name="Calendar" size={20} />
                <span>Записаться онлайн</span>
              </Link>
              <Link
                to="/services"
                className="beauty-button inline-flex items-center justify-center space-x-2"
              >
                <Icon name="Sparkles" size={20} />
                <span>Наши услуги</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Довольных клиентов
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Видов процедур
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=700&fit=crop&crop=face"
                alt="Косметологическая процедура"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">4.9/5</div>
                    <div className="text-sm text-muted-foreground">
                      Рейтинг клиентов
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
