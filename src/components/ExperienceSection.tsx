import {
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Diamond,
  Navigation
} from "lucide-react";

import { experience, interests } from "../data/Experiences";

const ExperienceSection = () => {
  return (
    <section
      id="experiencia"
      className="
        px-4
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
          p-5
          shadow-sm
          shadow-[var(--color-shadow)]
          sm:p-8
          lg:p-10
        "
      >
        {/* ENCABEZADO */}
        <div className="max-w-3xl">
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
            <Navigation size={18} />
            Trayectoria
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[0.75fr_1.25fr]
            xl:gap-12
          "
        >
          {/* RESUMEN */}
          <aside
            className="
              rounded-2xl
              border
              border-[var(--color-border)]
              bg-[var(--color-bg)]
              p-6
              sm:p-7
              lg:sticky
              lg:top-28
              lg:self-start
            "
          >
            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--color-primary)]
                  text-[#0f1419]
                "
              >
                <BriefcaseBusiness size={22} />
              </span>
              <h2
                className="
                  font-heading
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-[var(--color-text)]
                  sm:text-4xl
                "
              >
                Experiencia
              </h2>
            </div>

            <p
              className="
                mt-3
                font-body
                text-sm
                leading-6
                text-[var(--color-text-muted)]
                sm:text-base
              "
            >
              Mi enfoque esta en el desarrollo de aplicaciones, soporte de TI,
              documentación técnica y seguimiento de proyectos. Me motiva
              trabajar en equipo, aportar ideas y contribuir al desarrollo de
              soluciones que generen valor y mejoren los procesos.
            </p>

            {/* INTERESES PERSONALES */}
            <div
              className="
                mt-7
                border-t
                border-[var(--color-border)]
                pt-6
              "
            >
              <div className="mb-4 flex items-center gap-2">
                <BrainCircuit
                  size={18}
                  className="text-[var(--color-primary)]"
                />
                <h3
                  className="
                    font-heading
                    text-base
                    font-semibold
                    text-[var(--color-text)]
                  "
                >
                  Intereses
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-surface)]
                      px-4
                      py-2
                      font-body
                      text-sm
                      font-medium
                      text-[var(--color-text)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[var(--color-primary)]
                      hover:text-[var(--color-primary)]
                    "
                  >
                    <CheckCircle2
                      size={18}
                      className="
                        shrink-0
                        text-[var(--color-primary)]
                      "
                    />

                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* TIMELINE */}
          <div className="relative">
            {/* Línea */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-5
                left-[23px]
                top-5
                w-px
                bg-[var(--color-border)]
                sm:left-[27px]
              "
            />

            <div className="space-y-6">
              {experience.map((item, index) => (
                <article
                  key={item.id}
                  className="
                    group
                    relative
                    grid
                    grid-cols-[48px_1fr]
                    gap-4
                    sm:grid-cols-[56px_1fr]
                    sm:gap-5
                  "
                >
                  {/* NODO */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-surface)]
                      text-[var(--color-primary)]
                      transition-all
                      duration-300
                      group-hover:border-[var(--color-primary)]
                      group-hover:bg-[var(--color-primary)]
                    group-hover:text-[#0f1419]
                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Diamond size={21} />
                  </div>

                  {/* CARD */}
                  <div
                    className="
                      relative
                      rounded-2xl
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-bg)]
                      p-5
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:border-[var(--color-primary)]
                      sm:p-6
                    "
                  >
                    <span
                      className="
                        font-code
                        text-xs
                        font-medium
                        text-[var(--color-primary)]
                      "
                    >
                      {item.period}
                    </span>

                    <h3
                      className="
                        mt-2
                        font-heading
                        text-xl
                        font-semibold
                        text-[var(--color-text)]
                        sm:text-2xl
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        font-body
                        text-sm
                        text-[var(--color-text-muted)]
                      "
                    >
                      {item.organization}
                    </p>

                    {/* NÚMERO */}
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        right-5
                        top-4
                        -z-10
                        font-heading
                        text-6xl
                        font-bold
                        text-[var(--color-primary)]
                        opacity-[0.035]
                      "
                    >
                      {String(experience.length - index).padStart(2, "0")}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;