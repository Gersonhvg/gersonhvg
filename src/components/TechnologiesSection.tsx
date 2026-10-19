import TechnologyItem from "./TechnologyItem";
import { technologies } from "../data/Technologies";
import { Zap } from "lucide-react";

const TechnologiesSection = () => {
  return (
    <section
      id="tecnologias"
      className="
        mx-auto
        my-20
        px-4
        py-6
        sm:px-6
        md:px-8
        lg:px-10
      "
    >
      <div
        className="
          mx-auto
          rounded-2xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          px-4
          py-6
          shadow-sm
          shadow-[var(--color-shadow)]
          sm:px-6
          sm:py-8
          lg:px-10
          lg:py-10
        "
      >
        {/* ENCABEZADO */}
        <div className="mb-6">
          <div
            className="
              inline-flex
              items-center
              gap-2
              font-body
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-[var(--color-primary)]
            "
          >
            <Zap
                size={18}
                aria-hidden="true"
                className="
                  text-[var(--color-primary)]
                "
            />
            Habilidades y conocimientos
          </div>
          <h2
            className="
              mt-2
              font-heading
              text-3xl
              font-bold
              text-[var(--color-text)]
              sm:text-4xl
            "
          >
            Tecnologías
          </h2>
        </div>
        {/* CARRUSEL */}
        <div
          className="
            technology-marquee
            relative
            w-full
            overflow-hidden
          "
        >
          <div className="technology-track flex w-max">
            <div className="flex shrink-0 items-center gap-6 pr-6">
              {technologies.map((technology) => (
                <div
                  key={`first-${technology.id}`}
                  className="
                    w-[170px]
                    shrink-0
                    sm:w-[190px]
                    lg:w-[200px]
                  "
                >
                  <TechnologyItem {...technology} />
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="flex shrink-0 items-center gap-6 pr-6">
              {technologies.map((technology) => (
                <div
                  key={`second-${technology.id}`}
                  className="
                    w-[170px]
                    shrink-0
                    sm:w-[190px]
                    lg:w-[200px]
                  "
                >
                  <TechnologyItem {...technology} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;