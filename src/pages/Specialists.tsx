import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Specialists = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Специалисты
            </h1>
            <p className="text-xl text-muted-foreground">
              Подробная информация о наших специалистах скоро появится здесь
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Specialists;
