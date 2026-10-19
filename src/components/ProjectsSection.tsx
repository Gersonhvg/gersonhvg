import {Blocks} from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/Projects";

const ProjectsSection = () => {
  return (
    <section
      id="proyectos"
      className="
        mt-20
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        lg:pt-10
      "
    >
      <div
        className="
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
        {/* Encabezado */}
        <div
          className="
            mb-8
            flex
            items-end
            justify-between
            gap-12
          "
        >
          <div>
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
              <Blocks size={18} aria-hidden="true" className="text-[var(--color-primary)]"/>
              Mi trabajo
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
              Proyectos destacados
            </h2>
          </div>
        {/*
          <a
            href="/proyectos"
            className="
              hidden
              items-center
              gap-2
              font-body
              text-sm
              font-medium
              text-[var(--color-primary)]

              sm:inline-flex
            "
          >
            Ver todos los proyectos ssf
            <ArrowRight size={18} />
          </a>
        */}
        </div>
        <div
          className="
            grid
            grid-cols-1
            gap-10
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

        {/* Link móvil 
        <div className="mt-8 sm:hidden">
          <a
            href="/proyectos"
            className="
              inline-flex
              items-center
              gap-2
              font-body
              font-medium
              text-[var(--color-primary)]
            "
          >
            Ver todos los proyectos
            <ArrowRight size={18} />
          </a>
        </div>
        */}
      </div>
    </section>
  );
};

export default ProjectsSection;