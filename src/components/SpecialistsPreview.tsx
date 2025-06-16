import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SpecialistsPreview = () => {
  const specialists = [
    {
      name: "Анна Смирнова",
      specialty: "Главный косметолог",
      experience: "8 лет опыта",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      specializations: ["Инъекционная косметология", "Аппаратные процедуры"],
    },
    {
      name: "Елена Козлова",
      specialty: "Косметолог-эстетист",
      experience: "5 лет опыта",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      specializations: ["Чистки лица", "Пилинги"],
    },
    {
      name: "Мария Петрова",
      specialty: "Массажист",
      experience: "6 лет опыта",
      image:
        "https://images.unsplash.com/photo-1594824919437-d7c85a00d6c2?w=300&h=300&fit=crop&crop=face",
      specializations: ["Массаж лица", "Лимфодренаж"],
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Наши специалисты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Команда профессионалов с многолетним опытом и сертификатами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {specialists.map((specialist, index) => (
            <div key={index} className="beauty-card p-6 text-center group">
              <div className="relative mb-6">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  <Icon name="Award" size={16} className="inline mr-1" />
                  Сертифицирован
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-1">
                {specialist.name}
              </h3>
              <p className="text-primary font-medium mb-2">
                {specialist.specialty}
              </p>
              <p className="text-muted-foreground mb-4">
                {specialist.experience}
              </p>

              <div className="space-y-2 mb-6">
                {specialist.specializations.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block mr-2"
                  >
                    {spec}
                  </div>
                ))}
              </div>

              <Link
                to="/booking"
                className="beauty-button w-full inline-flex items-center justify-center space-x-2"
              >
                <Icon name="Calendar" size={16} />
                <span>Записаться</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/specialists"
            className="beauty-button-accent inline-flex items-center space-x-2"
          >
            <span>Все специалисты</span>
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsPreview;
