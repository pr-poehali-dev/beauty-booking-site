import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ServicesPreview = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Чистка лица",
      description: "Глубокое очищение, удаление комедонов, увлажнение",
      price: "от 3 500 ₽",
      duration: "60 мин",
    },
    {
      icon: "Zap",
      title: "Инъекции красоты",
      description: "Ботулинотерапия, мезотерапия, биоревитализация",
      price: "от 8 000 ₽",
      duration: "30-45 мин",
    },
    {
      icon: "Sun",
      title: "Пилинги",
      description: "Химические пилинги различной интенсивности",
      price: "от 4 000 ₽",
      duration: "45 мин",
    },
    {
      icon: "Gem",
      title: "Аппаратная косметология",
      description: "RF-лифтинг, фотоомоложение, лазерная терапия",
      price: "от 6 000 ₽",
      duration: "60-90 мин",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр косметологических процедур для здоровья и красоты
            вашей кожи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="beauty-card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={service.icon as any}
                  size={24}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-accent font-semibold text-lg">
                  {service.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  {service.duration}
                </div>
              </div>
              <Link
                to="/booking"
                className="w-full inline-block beauty-button text-center"
              >
                Записаться
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="beauty-button-accent">
            Все услуги и цены
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
