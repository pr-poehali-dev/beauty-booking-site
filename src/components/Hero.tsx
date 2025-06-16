import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Красота начинается
            <span className="text-primary"> с заботы</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональная косметология с индивидуальным подходом. Современные
            методики, опытные специалисты, результат который видно.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/booking"
              className="beauty-button-accent flex items-center space-x-2"
            >
              <Icon name="Calendar" size={20} />
              <span>Записаться онлайн</span>
            </Link>
            <Link
              to="/services"
              className="beauty-button flex items-center space-x-2"
            >
              <Icon name="Sparkles" size={20} />
              <span>Наши услуги</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Лицензированные специалисты
              </h3>
              <p className="text-muted-foreground">
                Дипломированные косметологи с опытом работы от 5 лет
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Индивидуальный подход
              </h3>
              <p className="text-muted-foreground">
                Персональные программы ухода для каждого клиента
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-muted-foreground">
                Стерильность, качественные препараты, современное оборудование
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
