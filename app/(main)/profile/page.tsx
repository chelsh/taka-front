"use client";

import Image from "next/image";

export default function Profile() {
  const userData = {
    name: "김꾸원",
    id: "ididid",
    email: "mail@korea.ac.kr",
    belongs: ["FLIP", "식품공학과"],
    password: "a description of this user.",
  };
  return (
    <div>
      <div className="px-4 pt-16 text-xl font-semibold">회원 정보</div>
      <div className="flex flex-col items-center justify-center py-6">
        <div className="mb-4 h-16 w-16 rounded-full bg-yellow-400" />
        <button className="text-sm font-semibold text-[#0D99FF]">
          프로필 이미지 수정
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 px-4 py-3 text-sm font-medium">
        <div>이름</div>
        <div className="col-span-2 font-normal">{userData.name}</div>
        <div>아이디</div>
        <div className="col-span-2 font-normal">{userData.id}</div>
        <div>이메일</div>
        <div className="col-span-2 font-normal">{userData.email}</div>
        <div>소속 단위</div>
        <div className="col-span-2 flex flex-col">
          {userData.belongs.map((belong, idx) => (
            <div key={idx} className="font-normal">
              {belong}
            </div>
          ))}
        </div>
        <div>비밀번호</div>
        <div className="col-span-2 flex justify-between font-normal">
          {userData.password}
          <span className="cursor-pointer">
            <Image
              src="/chevron-right.svg"
              width={10}
              height={10}
              alt="chevron"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
