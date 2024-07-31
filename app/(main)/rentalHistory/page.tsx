"use client";

export default function RentalHistory() {
  const rentedItems = [
    { id: 0, rentDate: "24/06/23", item: "계산기1", returnDate: "24/06/25" },
    { id: 1, rentDate: "24/06/23", item: "계산기1", returnDate: "24/06/25" },
    { id: 2, rentDate: "24/06/23", item: "계산기1", returnDate: "24/06/25" },
  ];
  return (
    <div>
      <div className="px-4 pt-16 text-xl font-semibold">대여 기록</div>
      <div className="mx-2 mt-4 flex flex-row border-b-[1px] py-[10px] text-center text-sm font-medium text-[#828282]">
        <div className="flex-[14]">대여일</div>
        <div className="flex-[20]">대여 물품</div>
        <div className="flex-[14]">반납일</div>
        <div className="flex-[11]">상태</div>
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
            <div className="whitespace-nowrap rounded-lg bg-[#9EFF9C] py-[6px] text-xs font-semibold">
              반납 완료
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
