import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type InputFieldProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function PasswordField({
  label,
  error,
  ...props
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={props.id} className="text-[14px] text-[var(--main)]">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...props}
          className="bg-[#fafafa] border border-[#f4f4f4] rounded-[8px] px-4 py-1 h-[48px] w-full"
        />

        <span
          onClick={togglePasswordVisibility}
          className="absolute end-3 bottom-3 cursor-pointer text-[var(--text)]"
        >
          {showPassword ? (
            <Eye className="w-5 h-5" />
          ) : (
            <EyeOff className="w-5 h-5" />
          )}
        </span>
      </div>

      {error && <span className="text-[12px] text-[red]">{error}</span>}
    </div>
  );
}
