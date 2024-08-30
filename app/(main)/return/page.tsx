"use client";

import Modal from "@/app/components/Modal";
import { useState } from "react";

export default function Return() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const rentedItems = [
    { id: 0, rentDate: "24/06/23", item: "계산기1", returnDate: "24/06/25" },
    { id: 1, rentDate: "24/06/23", item: "계산기1", returnDate: "24/06/25" },
    { id: 2, rentDate: "24/06/23", item: "계산기1", returnDate: "24/06/25" },
  ];

  function callReturnItemApi() {
    return true;
  }

  return (
    <div>
      <div className="px-4 pt-16 text-xl font-semibold">대여 중인 물품</div>
      <div className="mx-2 mt-4 flex flex-row border-b-[1px] py-[10px] text-center text-sm font-medium text-[#828282]">
        <div className="flex-[14]">대여일</div>
        <div className="flex-[20]">대여 물품</div>
        <div className="flex-[14]">반납예정일</div>
        <div className="flex-[11]">반납하기</div>
      </div>
      {rentedItems.map((item, idx) => (
        <div
          key={idx}
          className="mx-2 flex flex-row border-b-[1px] py-3 text-center text-sm font-normal opacity-90"
        >
          <div className="flex-[14] leading-7">{item.rentDate}</div>
          <div className="flex-[20] leading-7">{item.item}</div>
          <div className="flex-[14] leading-7">{item.returnDate}</div>
          <div className="flex-[11]">
            <button
              className="whitespace-nowrap rounded-lg bg-black px-2 py-[6px] text-xs font-semibold text-white"
              onClick={() => {
                //반납 api
                setShowModal(true);
              }}
            >
              반납하기
            </button>
            {showModal ? (
              <Modal
                text={`'${item.item}'을 반납하시겠습니까?`}
                cancelable={true}
                setShowModal={setShowModal}
                callback={callReturnItemApi}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
