import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ольга М.",
      text: "Прекрасный салон! Анна делала мне чистку лица - результат потрясающий. Очень довольна качеством услуг.",
      rating: 5,
    },
    {
      name: "Екатерина Л.",
      text: "Хожу к Марии уже полгода на процедуры RF-лифтинга. Кожа заметно подтянулась, выглядит моложе.",
      rating: 5,
    },
    {
      name: "Анастасия К.",
      text: "Отличный сервис и профессиональный подход. Елена очень внимательна к деталям, всегда довольна результатом.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground">
            Нам доверяют свою красоту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
