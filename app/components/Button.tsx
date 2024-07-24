import { MouseEventHandler } from "react";

export default function Button({
  bgColor,
  textColor,
  innerText,
  onClick,
}: {
  bgColor: string;
  textColor: string;
  innerText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`${bgColor} ${textColor} w-full rounded-lg py-2 text-sm`}
      onClick={onClick}
    >
      {innerText}
    </button>
  );
}
