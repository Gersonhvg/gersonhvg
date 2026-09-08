import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="px-2 md:px-4">
      <Navbar />

      <main className=" pt-20">
        <section id="inicio" className="min-h-screen scroll-mt-24">
          <h1 className="font-heading text-6xl font-bold">
            Hola, soy Gerson
          </h1>
          <p>lore ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>

        <section id="sobre-mi" className="min-h-screen scroll-mt-24">
          <h2 className="font-heading text-4xl font-semibold">
            Sobre mí
          </h2>
        </section>

        <section id="proyectos" className="min-h-screen scroll-mt-24">
          <h2 className="font-heading text-4xl font-semibold">
            Proyectos
          </h2>
        </section>

        <section id="tecnologias" className="min-h-screen scroll-mt-24">
          <h2 className="font-heading text-4xl font-semibold">
            Tecnologías
          </h2>
        </section>

        <section id="experiencia" className="min-h-screen scroll-mt-24">
          <h2 className="font-heading text-4xl font-semibold">
            Experiencia
          </h2>
        </section>

        <section id="contacto" className="min-h-screen scroll-mt-24">
          <h2 className="font-heading text-4xl font-semibold">
            Contacto
          </h2>
        </section>
      </main>
    </div>
  );
};

export default Home;