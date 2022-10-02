interface FormHeaderProps {
  title: string;
  caption: string;
}

export const FormHeader = ({ title, caption }: FormHeaderProps) => {
  return (
    <div className="text-center flex flex-col gap-2 py-8">
      <h1>{title}</h1>
      <span className="text-gray-600">{caption}</span>
    </div>
  );
};
