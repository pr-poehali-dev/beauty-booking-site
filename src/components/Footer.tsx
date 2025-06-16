import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">BeautyTime</span>
            </div>
            <p className="text-muted-foreground">
              Профессиональная косметология с заботой о каждом клиенте
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Главная
              </Link>
              <Link
                to="/services"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Услуги
              </Link>
              <Link
                to="/specialists"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Специалисты
              </Link>
              <Link
                to="/booking"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Запись онлайн
              </Link>
              <Link
                to="/contacts"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Контакты
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@beautytime.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Красивая, 15</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © 2024 BeautyTime. Все права защищены.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
