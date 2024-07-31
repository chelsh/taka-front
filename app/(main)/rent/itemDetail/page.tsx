"use client";

import Image from "next/image";
import Button from "@/app/components/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function ItemDetail({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
  //   searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();

  const groupName = searchParams!.groupName;
  const groupId = searchParams!.groupId;
  const itemId = searchParams!.itemId;

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
      <div className="fixed top-0 z-[999] flex w-full flex-row items-center justify-center border-b-[1px] border-b-gray-200 bg-white px-4 pb-3 pt-10">
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
      <div className="flex overflow-x-scroll px-4 pt-24 scrollbar-hide">
        <div className="flex space-x-2">
          {itemDetail.photos.map((photo, idx) => (
            <div
              key={idx}
              className="relative h-[343px] w-[343px] overflow-hidden rounded-xl border-[1px]"
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
      <div className="flex flex-col px-4 pb-40 pt-4">
        <div className="text-2xl font-semibold">{itemDetail.name}</div>
        <div className="mb-2 font-light">
          대여 가능 기간: {itemDetail.rentalPeriod}일
        </div>
        <ul className="mx-5 list-disc text-sm text-[#828282]">
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
      <div className="fixed bottom-20 w-full px-4 pb-4">
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
