import { MouseEventHandler } from "react";

export default function Button({
  bgColor,
  textColor,
  innerText,
  style,
  onClick,
}: {
  bgColor: string;
  textColor: string;
  innerText: string;
  style?: string;
  onClick: Function;
}) {
  return (
    <button
      className={`${bgColor} ${textColor} ${style} w-full rounded-lg py-2 text-sm`}
      onClick={() => onClick()}
    >
      {innerText}
    </button>
  );
}
