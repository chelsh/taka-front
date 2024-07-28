import { Dispatch, SetStateAction } from "react";

export default function Modal({
  text,
  showModal,
}: {
  text: string;
  showModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="z-[999] text-sm w-2/3 text-center shadow-xl bg-white fixed rounded-xl top-[40%] left-[16.6%]">
      <div className="border-b-[1px] mx-4 border-gray-300 py-8">{text}</div>
      <div className="py-3" onClick={() => showModal(false)}>
        확인
      </div>
    </div>
  );
}
