import { Dispatch, SetStateAction } from "react";

export default function Modal({
  text,
  cancelable,
  setShowModal,
  callback,
}: {
  text: string;
  cancelable: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  callback?: Function;
}) {
  return (
    <div className="z-30 fixed bg-black bg-opacity-50 left-0 top-0 flex h-full w-full items-center justify-center">
      <div
        className="z-40 w-2/3 rounded-xl bg-white text-center text-sm"
        // style={{ boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.05)" }}
      >
        <div className="border-b-[1px] border-gray-300 py-8">{text}</div>
        <div className="flex flex-row divide-x-[1px]">
          {cancelable ? (
            <div
              className="flex-1 cursor-pointer py-3"
              onClick={() => setShowModal(false)}
            >
              취소
            </div>
          ) : null}
          <div
            className="flex-1 cursor-pointer py-3"
            onClick={() => {
              if (callback) callback();
              setShowModal(false);
            }}
          >
            확인
          </div>
        </div>
      </div>
    </div>
  );
}
