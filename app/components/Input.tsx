import { ChangeEventHandler } from "react";

export default function Input({
  type,
  placeholder,
  value,
  maxLength,
  onChange,
}: {
  type: string;
  placeholder?: string;
  value: string;
  maxLength?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-[1px] rounded-lg px-4 text-sm py-2 w-full"
      value={value}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
}
