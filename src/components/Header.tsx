import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              BeautyTime
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Услуги
            </Link>
            <Link
              to="/specialists"
              className="text-foreground hover:text-primary transition-colors"
            >
              Специалисты
            </Link>
            <Link to="/booking" className="beauty-button-accent">
              Запись онлайн
            </Link>
            <Link
              to="/contacts"
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </Link>
            <Link
              to="/profile"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Icon name="User" size={20} />
            </Link>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
