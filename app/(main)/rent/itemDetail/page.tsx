"use client";

import Image from "next/image";
import Button from "@/app/components/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function ItemDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const groupName = searchParams.get("groupName");
  console.log(groupName);
  const groupId = searchParams.get("groupId");
  const itemId = searchParams.get("itemId");

  const itemDetail = {
    id: 0,
    name: "스케이트보드0",
    photos: ["/itemPhoto1.svg", "/itemPhoto2.svg", "/board.jpeg"], //photo url
    rentalPeriod: 3,
    descriptionList: [
      "바퀴가 잘 안굴러가니 조심하세요!",
      "대여 중 발생하는 안전사고는 책임지지 않습니다",
    ],
  };

  //  item id(+ groupId ?  <- item id가 item 전체에서 unique 하지 않을 시에) 로 detail 리턴하는 Post api

  return (
    <div>
      <div className="z-[999] bg-white pt-10 w-full top-0 fixed pb-3 px-4 border-b-[1px] justify-center items-center flex flex-row border-b-gray-200">
        <Image
          src="/chevron-left.svg"
          width={20}
          height={20}
          alt="back"
          className="absolute left-5"
          onClick={() => router.back()}
        />
        <div className="text-lg font-semibold">{groupName}</div>
      </div>
      <div className="pt-24 overflow-x-scroll px-4 flex scrollbar-hide">
        <div className="flex space-x-2">
          {itemDetail.photos.map((photo, idx) => (
            <div
              key={idx}
              className="relative w-80 h-80 border-[1px] rounded-xl overflow-hidden"
            >
              <Image
                src={photo}
                fill
                alt="itemPhoto"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 pt-4 flex flex-col pb-[150px]">
        <div className="text-2xl font-semibold">{itemDetail.name}</div>
        <div className="font-light mb-2">
          대여 가능 기간: {itemDetail.rentalPeriod}일
        </div>
        <ul className="mx-5 list-disc text-[#828282] text-sm">
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
          {itemDetail.descriptionList.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
        </ul>
      </div>
      <div className="w-full px-4 fixed bottom-20 pb-4">
        <Button
          bgColor="bg-black"
          textColor="text-white"
          innerText="대여하기"
          style="py-3.5 text-base"
          onClick={() => {
            //대여하기 api
          }}
        />
      </div>
    </div>
  );
}
