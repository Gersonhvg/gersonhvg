import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  technologies: React.ElementType[];
};

const ProjectCard = ({
  title,
  category,
  description,
  image,
  href,
  technologies,
}: ProjectCardProps) => {
  return (
    <article
      className="
        overflow-hidden
        rounded-xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-[var(--color-shadow)]
      "
    >
      {/* Imagen */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={`Vista previa del proyecto ${title}`}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        {/* Categoría */}
        <span
          className="
            absolute
            left-3
            top-3
            rounded-md
            bg-[var(--color-primary)]
            px-3
            py-1
            font-body
            text-xs
            font-semibold
            text-[var(--color-bg)]
          "
        >
          {category}
        </span>
      </div>

      {/* Información */}
      <div className="p-5">
        <h3
          className="
            font-heading
            text-xl
            font-semibold
            text-[var(--color-text)]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            font-body
            text-sm
            leading-6
            text-[var(--color-text-muted)]
          "
        >
          {description}
        </p>

        {/* Footer de la card */}
        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            gap-4
          "
        >
          {/* Tecnologías */}
          <div className="flex items-center gap-3">
            {technologies.map((Icon, index) => (
              <Icon
                key={index}
                size={18}
                className="
                  text-[var(--color-text-muted)]
                  transition-colors
                  duration-300
                  hover:text-[var(--color-primary)]
                "
              />
            ))}
          </div>

          {/* Enlace */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              px-3
              py-2
              whitespace-nowrap
              font-body
              text-sm
              font-medium
              text-[var(--color-primary)]
              duration-300
              transition-colors
              hover:bg-[var(--color-shadow)]
              border
              border-transparent
            "
          >
            Ver proyecto
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;