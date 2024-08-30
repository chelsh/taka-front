import { ChangeEventHandler } from "react";

export default function Input({
  type,
  placeholder,
  value,
  maxLength,
  style,
  onChange,
}: {
  type: string;
  placeholder?: string;
  value: string;
  maxLength?: number;
  style?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${style} w-full rounded-lg border-[1px] px-4 py-2 text-sm`}
      value={value}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
}
