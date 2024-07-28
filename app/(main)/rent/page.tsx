"use client"

import { useState } from "react";
import ItemsFeed from "../../components/ItemsFeed";

export default function Rent() {
  const groups = [
    {
      id: 0,
      name: "FLIP",
      itemList: [
        {
          category: "스케이트보드",
          description: "트릭에 최적화된 보드입니다.",
          items: [
            {
              id: 0,
              name: "스케이트보드0",
              photos: ["/itemPhoto1.svg", "/itemPhoto2.svg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
            {
              id: 1,
              name: "스케이트보드1",
              photos: ["/itemPhoto1.svg", "/itemPhoto2.svg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
            {
              id: 2,
              name: "스케이트보드2",
              photos: ["/itemPhoto1.svg", "/itemPhoto2.svg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
            {
              id: 3,
              name: "스케이트보드3",
              photos: ["/itemPhoto1.svg", "/itemPhoto2.svg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
            {
              id: 4,
              name: "스케이트보드4",
              photos: ["/itemPhoto1.svg", "/itemPhoto2.svg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
          ],
        },
        {
          category: "롱보드",
          description: "주행에 최적화된 보드입니다.",
          items: [
            {
              id: 0,
              name: "롱보드0",
              photos: ["/itemPhoto1.svg", "/itemPhoto2.svg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
            {
              id: 1,
              name: "롱보드1",
              photos: ["/itemPhoto1.svg", "/itemPhoto2.svg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "식품공학과",
      itemList: [
        {
          category: "스케이트보드",
          description: "트릭에 최적화된 보드입니다.",
          items: [
            {
              id: 0,
              name: "스케이트보드0",
              photos: ["/board.jpeg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
            {
              id: 1,
              name: "스케이트보드1",
              photos: ["/itemPhoto1.svg", "/itemPhoto2.svg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
          ],
        },
        {
          category: "롱보드",
          description: "주행에 최적화된 보드입니다.",
          items: [
            {
              id: 0,
              name: "롱보드0",
              photos: ["/itemPhoto1.svg", "/itemPhoto2.svg"], //photo url
              rentalPeriod: 3,
              descriptionList: [
                "바퀴가 잘 안굴러가니 조심하세요!",
                "대여 중 발생하는 안전사고는 책임지지 않습니다",
              ],
            },
          ],
        },
      ],
    },
  ];

  const [selectedGroupIdx, setSelectedGroupIdx] = useState<number>(0);
  return (
    <div>
      <div className="flex flex-row px-4 pt-16 space-x-3 overflow-x-scroll scrollbar-hide">
        {groups.map((group, idx) => (
          <div
            key={idx}
            className="bg-[#f6f6f6] px-4 py-2 whitespace-nowrap rounded-3xl text-sm font-medium flex items-center text-center"
            style={{
              color: group.id === selectedGroupIdx ? "#fff" : "#000",
              backgroundColor:
                selectedGroupIdx === group.id ? "#000" : "#f6f6f6",
            }}
            onClick={() => setSelectedGroupIdx(group.id)}
          >
            {group.name}
          </div>
        ))}
      </div>
      <ItemsFeed
        group={groups.find((group) => group.id === selectedGroupIdx)!}
      />
    </div>
  );
}
