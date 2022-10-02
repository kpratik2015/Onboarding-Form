import { forwardRef } from "react";
import clsxm from "../../utils/clsxm";

enum ButtonVariant {
  "primary",
}

type ButtonProps = {
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsxm(
          "inline-flex items-center px-4 py-2 rounded-md",
          "focus:outline-none focus-visible:ring focus-visible:ring-cyan-500",
          "transition-colors duration-75",
          "disabled:cursor-not-allowed",
          [
            variant === "primary" && [
              "bg-primary-400 text-white",
              "border border-primary-400",
              "active:bg-primary-400",
              "disabled:bg-primary-400/50 disabled:hover:bg-primary-400/50",
            ],
          ],
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
