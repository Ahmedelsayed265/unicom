import { useTranslation } from "react-i18next";

type InputFieldProps = {
  label?: string;
  error?: string;
  canReset?: boolean;
  onReset?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  error,
  canReset,
  onReset,
  ...props
}: InputFieldProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={props.id}
          className="text-sm flex items-center justify-between"
        >
          {label}

          {canReset && (
            <button className="text-[var(--second)]" onClick={onReset}>
              {t("resetAns")}
            </button>
          )}
        </label>
      )}

      <input
        {...props}
        className="bg-[#fafafa] border text-[14px] border-[#f4f4f4] rounded-[8px] px-3 py-1 h-[48px]"
      />

      {error && <span className="text-[12px] text-[red]">{error}</span>}
    </div>
  );
}
