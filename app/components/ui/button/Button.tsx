type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
};

const BASE_STYLE =
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg transition-transform duration-200 ease-in-out shadow-sm focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const VARIANTS = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant transition-all duration-300",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
  hero: "bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-500 transform hover:scale-105",
  camera:
    "bg-accent text-accent-foreground hover:bg-accent/90 shadow-card transition-all duration-300",
};

const SIZES = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

export const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${BASE_STYLE} ${VARIANTS[variant || "default"]} ${
        SIZES[size || "default"]
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
