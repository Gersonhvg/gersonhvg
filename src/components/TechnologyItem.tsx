import type { IconType } from "react-icons";

type TechnologyItemProps = {
  name: string;
  icon: IconType;
  color: string;
};

const TechnologyItem = ({
  name,
  icon: Icon,
  color,
}: TechnologyItemProps) => {
  return (
    <div
      className="
        group
        flex
        items-center
        py-2
        px-2
        text-center
        rounded-xl
        transition-all
        duration-300
        hover:bg-[var(--color-shadow)]
      "
    >
      {/* Icono */}
      <div
        className="
          flex
          h-auto
          w-auto
          shrink-0
          items-center
          justify-center
          rounded-lg
          transition-transform
          duration-300
        "
      >
        <Icon
          size={28}
          style={{ color }}
        />
      </div>

      {/* Nombre */}
      <span
        className="
          whitespace-nowrap
          justify-center
          w-full
          text-center
          font-body
          text-sm
          font-medium
          text-[var(--color-text)]
          sm:text-base
        "
      >
        {name}
      </span>
    </div>
  );
};

export default TechnologyItem;