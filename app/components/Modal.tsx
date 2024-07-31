import { Dispatch, SetStateAction } from "react";

export default function Modal({
  text,
  showModal,
}: {
  text: string;
  showModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed left-[16.6%] top-[40%] z-[999] w-2/3 rounded-xl bg-white text-center text-sm shadow-xl">
      <div className="mx-4 border-b-[1px] border-gray-300 py-8">{text}</div>
      <div className="py-3" onClick={() => showModal(false)}>
        확인
      </div>
    </div>
  );
}
