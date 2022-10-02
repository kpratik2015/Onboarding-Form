import { RegisterOptions, useFormContext } from "react-hook-form";
import clsxm from "../../utils/clsxm";

export type InputProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: React.HTMLInputTypeAttribute;
  readOnly?: boolean;
  validation?: RegisterOptions;
  leftRender?: React.ReactNode;
  rightRender?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  label,
  placeholder = "",
  helperText,
  id,
  rightRender = null,
  leftRender = null,
  type = "text",
  readOnly = false,
  validation,
  className,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4 pb-4">
      <label htmlFor={id} className="block text-sm font-normal">
        {label}{" "}
        {helperText && (
          <span className="mr-1 inline-flex items-start text-xs text-gray-300">
            {helperText}
          </span>
        )}
      </label>
      <div className={clsxm("relative -mt-3 flex")}>
        {leftRender}
        <input
          {...register(id, validation)}
          {...rest}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsxm(
            readOnly
              ? "cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300"
              : errors[id]
              ? "border-red-500 focus:border-red-500"
              : "border-primary-100 focus:border-b-primary-500",
            "block w-full rounded-md border border-gray-200 placeholder-slate-300",
            leftRender && "rounded-none rounded-r-md",
            rightRender && "pr-8",
            className
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        {rightRender && (
          <div className="absolute inset-y-0 right-1 flex h-full w-6 items-center">
            {rightRender}
          </div>
        )}
      </div>
    </div>
  );
}
