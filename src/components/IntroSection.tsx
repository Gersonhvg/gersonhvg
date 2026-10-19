import {
  ArrowRight,
  Mail,
  CodeXml,
  Layers3,
  BriefcaseBusiness,
  FolderCode,
} from "lucide-react";

import themeDarkIntro from "../assets/images/theme-dark-intro.png";
import themeLightIntro from "../assets/images/theme-light-intro.png";
import IntroItem from "./IntroItems";

const IntroSection = () => {
  return (
    <section
      id="inicio"
      className="
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
      "
    >
      <div
        className="
          mx-auto
          mt-24
          grid
          grid-cols-1
          items-center
          gap-16
          px-4
          sm:px-6
          md:px-8
          lg:grid-cols-[50%_50%]
          lg:gap-10
          lg:px-10
          xl:grid-cols-[45%_55%]
          xl:gap-10
          xl:mt-0
        "
      >
        <div
          className="
            order-1
            w-full
            max-w-2xl
            justify-self-center
            lg:justify-self-start
          "
        >
          <span
            className="
              hero-hello
              inline-flex
              rounded-full
              bg-[var(--color-surface)]
              px-4
              py-2
              font-body
              text-sm
              font-medium
              text-[var(--color-primary)]
            "
          >
            ¡Hola! Soy
          </span>

          <h1
            className="
              hero-title
              mt-5
              font-heading
              font-bold
              leading-tight
              tracking-tight
              text-[var(--color-text)]
              text-5xl
              md:text-6xl
              lg:leading-none
              xl:text-7xl
            "
          >
            Gerson Vasquez
          </h1>

          <h2
            className="
              hero-subtitle
              mt-3
              font-heading
              text-xl
              font-semibold
              leading-snug
              text-[var(--color-primary)]
              sm:text-2xl
              lg:text-3xl
            "
          >
            Ingeniero de Computación y Sistemas
          </h2>

          <p
            className="
              hero-description
              mt-6
              max-w-xl
              font-body
              text-base
              leading-7
              text-[var(--color-text-muted)]
              sm:text-lg
            "
          >
            Especializado en diseño, desarrollo y soporte operativo de
            soluciones de TI
          </p>

          <div
            className="
              hero-actions
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <a
              href="#proyectos"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                bg-[var(--color-primary)]
                px-6
                py-3
                font-body
                font-semibold
                text-[var(--color-bg)]
                transition-all
                duration-300
                hover:bg-[var(--color-primary-light)]
                hover:-translate-y-1
                sm:w-auto
              "
            >
              Ver proyectos
              <ArrowRight size={20} />
            </a>

            <a
              href="#contacto"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                border
                border-[var(--color-border)]
                px-6
                py-3
                font-body
                font-semibold
                text-[var(--color-text)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--color-primary)]
                hover:text-[var(--color-primary)]
                sm:w-auto
              "
            >
              Contactar
              <Mail size={20} />
            </a>
          </div>

          {/* MÉTRICAS */}
          <div
            className="
              hero-stats
              mt-10
              grid
              grid-cols-2
              gap-x-6
              gap-y-8
              sm:grid-cols-4
              sm:gap-x-4
              lg:gap-x-5
            "
          >
            <IntroItem
              icon={<FolderCode size={20} />}
              value="+3"
              label="Proyectos desarrollados"
            />

            <IntroItem
              icon={<Layers3 size={20} />}
              value="Full Stack"
              label="Frontend Backend"
            />

            <IntroItem
              icon={<BriefcaseBusiness size={20} />}
              value="+2"
              label="Experiencias profesionales"
            />

            <IntroItem
              icon={<CodeXml size={20} />}
              value="+7"
              label="Tecnologías utilizadas"
            />
          </div>
        </div>

        {/* IMAGEN */}
        <div
          className="
            hero-visual
            group
            order-2
            flex
            w-full
            items-center
            justify-center
            lg:justify-end
          "
        >
          <picture
            className="
              relative
              w-full
              max-w-md
              sm:max-w-xl
              md:max-w-none
              lg:mr-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                inset-[20%]
                z-0
                rounded-s-3xl
                bg-[var(--color-primary-light)]
                opacity-25
                blur-2xl
              "
            />

            {/* Imagen tema claro */}
            <img
              src={themeLightIntro}
              alt="Espacio de trabajo de desarrollo de software"
              className="
                hero-image-light
                relative
                z-10
                h-auto
                w-full
                object-contain
                transition-transform
                duration-500
                ease-out
                group-hover:scale-[1.02]
              "
            />

            {/* Imagen tema oscuro */}
            <img
              src={themeDarkIntro}
              alt=""
              aria-hidden="true"
              className="
                hero-image-dark
                relative
                z-10
                hidden
                h-auto
                w-full
                object-contain
                transition-transform
                duration-500
                ease-out
                group-hover:scale-[1.02]
              "
            />
          </picture>
        </div>
      </div>
    </section>
  );
};



export default IntroSection;