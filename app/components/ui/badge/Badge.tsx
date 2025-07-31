type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
};

const BASE_STYLE =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

const VARIANTS = {
  default:
    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
  secondary:
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive:
    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-foreground",
};

export const Badge = ({
  children,
  className,
  variant,
  ...props
}: BadgeProps) => {
  return (
    <div
      className={`${BASE_STYLE} ${VARIANTS[variant || "default"]} ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};
