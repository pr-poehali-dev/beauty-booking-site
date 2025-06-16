import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ольга Иванова",
      text: "Прекрасная клиника! Анна - настоящий профессионал. После биоревитализации кожа стала выглядеть на 10 лет моложе.",
      rating: 5,
      service: "Биоревитализация",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c9cc?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Марина Сидорова",
      text: "Очень довольна результатом чистки лица. Елена работает очень аккуратно и профессионально. Рекомендую!",
      rating: 5,
      service: "Чистка лица",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Екатерина Волкова",
      text: "Массаж лица у Марии - это просто волшебство! Расслабляет и омолаживает одновременно. Хожу уже полгода.",
      rating: 5,
      service: "Массаж лица",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы гордимся доверием наших клиентов и их результатами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="beauty-card p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className="text-accent fill-current"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-secondary/50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Готовы преобразиться?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Запишитесь на консультацию и получите индивидуальный план ухода за
            кожей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+74951234567"
              className="beauty-button inline-flex items-center justify-center space-x-2"
            >
              <Icon name="Phone" size={20} />
              <span>+7 (495) 123-45-67</span>
            </a>
            <a
              href="https://wa.me/74951234567"
              className="beauty-button-accent inline-flex items-center justify-center space-x-2"
            >
              <Icon name="MessageCircle" size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
