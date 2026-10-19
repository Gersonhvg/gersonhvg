type IntroItemProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const IntroItem = ({
  icon,
  value,
  label,
}: IntroItemProps) => {
  return (
    <div
      className="
        flex
        min-w-0
        items-start
        gap-2
      "
    >
      <span
        className="
          mt-1
          shrink-0
          text-[var(--color-primary)]
        "
      >
        {icon}
      </span>
      <div className="min-w-0">
        <strong
          className="
            block
            font-heading
            text-lg
            font-semibold
            leading-tight
            text-[var(--color-text)]
            sm:text-xl
          "
        >
          {value}
        </strong>
        <span
          className="
            mt-1
            block
            font-body
            text-xs
            leading-5
            text-[var(--color-text-muted)]
            sm:text-sm
          "
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default IntroItem;