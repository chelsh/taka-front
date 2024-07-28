"use client";

export default function Return() {
  const rentedItems = [
    { id: 0, rentDate: "24/06/23", item: "계산기1", returnDate: "24/06/25" },
    { id: 1, rentDate: "24/06/23", item: "계산기1", returnDate: "24/06/25" },
    { id: 2, rentDate: "24/06/23", item: "계산기1", returnDate: "24/06/25" },
  ];
  return (
    <div>
      <div className="px-4 pt-16 text-xl font-semibold">대여 중인 물품</div>
      <div className="flex flex-row text-center py-[10px] text-[#828282] mt-4 mx-2 border-b-[1px] font-medium text-sm">
        <div className="flex-[14]">대여일</div>
        <div className="flex-[20]">대여 물품</div>
        <div className="flex-[14]">반납예정일</div>
        <div className="flex-[11]">반납하기</div>
      </div>
      {rentedItems.map((item, idx) => (
        <div
          key={idx}
          className="flex py-3 flex-row text-center mx-2 border-b-[1px] font-normal text-sm opacity-90"
        >
          <div className="flex-[14] leading-7">{item.rentDate}</div>
          <div className="flex-[20] leading-7">{item.item}</div>
          <div className="flex-[14] leading-7">{item.returnDate}</div>
          <div className="flex-[11]">
            <button
              className="bg-black whitespace-nowrap text-white text-xs font-semibold py-[6px] px-2 rounded-lg"
              onClick={() => {
                //반납 api
              }}
            >
              반납하기
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
