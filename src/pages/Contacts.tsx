import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground">
              Контактная информация скоро появится здесь
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
