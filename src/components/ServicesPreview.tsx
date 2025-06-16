import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ServicesPreview = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Чистка лица",
      description: "Глубокое очищение и восстановление кожи",
      price: "от 3 500 ₽",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    },
    {
      icon: "Zap",
      title: "Биоревитализация",
      description: "Увлажнение и омоложение кожи",
      price: "от 8 000 ₽",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
    },
    {
      icon: "Heart",
      title: "Массаж лица",
      description: "Расслабляющий и омолаживающий массаж",
      price: "от 2 500 ₽",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    },
    {
      icon: "Sun",
      title: "Пилинги",
      description: "Обновление и выравнивание кожи",
      price: "от 4 000 ₽",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональный уход за кожей с использованием современных
            технологий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="beauty-card p-6 group">
              <div className="relative mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon
                    name={service.icon as any}
                    size={20}
                    className="text-white"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  {service.price}
                </span>
                <Link
                  to="/booking"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Icon name="ArrowRight" size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="beauty-button inline-flex items-center space-x-2"
          >
            <span>Все услуги</span>
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
