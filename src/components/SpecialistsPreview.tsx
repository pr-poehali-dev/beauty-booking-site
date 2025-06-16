import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SpecialistsPreview = () => {
  const specialists = [
    {
      name: "Анна Петрова",
      role: "Главный косметолог",
      experience: "12 лет опыта",
      specialization: "Инъекционная косметология",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Мария Сидорова",
      role: "Косметолог-эстетист",
      experience: "8 лет опыта",
      specialization: "Аппаратная косметология",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Елена Козлова",
      role: "Косметолог",
      experience: "6 лет опыта",
      specialization: "Уходовые процедуры",
      image:
        "https://images.unsplash.com/photo-1594824388853-190c01b8e98e?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Наши специалисты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Команда профессионалов с многолетним опытом и постоянным обучением
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {specialists.map((specialist, index) => (
            <div key={index} className="beauty-card p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{specialist.name}</h3>
              <p className="text-primary font-medium mb-2">{specialist.role}</p>
              <p className="text-muted-foreground mb-3">
                {specialist.experience}
              </p>
              <p className="text-sm font-medium text-accent mb-4">
                {specialist.specialization}
              </p>
              <Link
                to="/booking"
                className="beauty-button w-full inline-block text-center"
              >
                Записаться к специалисту
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/specialists" className="beauty-button-accent">
            Все специалисты
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsPreview;
