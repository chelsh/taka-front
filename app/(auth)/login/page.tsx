"use client";

import Image from "next/image";
import { useState } from "react";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showEmailWarning, setShowEmailWarning] = useState<boolean>(false);
  const [showPasswordWarning, setShowPasswordWarning] =
    useState<boolean>(false);

  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex flex-col items-center justify-center space-y-4 pb-12 pt-32">
          <Image src="/logo.svg" width={99} height={54} alt="logo" />
          <div className="text-sm font-light">당신을 위한 대여사업 도우미</div>
        </div>
        <div className="w-full text-center">
          <div className="mb-6 text-lg font-semibold">로그인</div>
          <div className="mx-6 flex flex-col items-center justify-center space-y-3 border-b-[1px] border-b-gray-200 pb-8">
            {/* <div className="w-full"> */}
            <Input
              type="text"
              placeholder="학교 이메일"
              value={email}
              maxLength={30}
              onChange={(e) => {
                const regex1 = /[A-Za-z0-9]+@([a-z]+\.){1,2}[a-z]{2,}/;

                if (regex1.test(e.target.value)) setShowEmailWarning(false);
                else setShowEmailWarning(true);
                setEmail(e.target.value);
              }}
            />
            {/* <span className="absolute text-[#828282] right-10 mt-2">@korea.ac.kr</span> */}
            {/* </div> */}
            {showEmailWarning ? (
              <div className="mb-3 ml-2 mt-1 w-full text-start text-xs text-red-700">
                정확한 이메일 주소를 써주세요.
              </div>
            ) : null}
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                const regex1 =
                  /(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}/;
                if (regex1.test(e.target.value)) setShowPasswordWarning(false);
                else setShowPasswordWarning(true);
                setPassword(e.target.value);
              }}
            />
            {showPasswordWarning ? (
              <div className="mb-3 ml-2 mt-1 flex w-full text-start text-xs text-red-700">
                비밀번호는 영문, 숫자, 특수문자 조합의 8~15자를 사용해야 합니다.
              </div>
            ) : null}
            <Button
              bgColor="bg-black"
              textColor="text-white"
              innerText="로그인"
              onClick={() => {
                /* login api*/
                const resOk = true;
                if (resOk) {
                  router.push("/rent");
                }
              }}
            />
          </div>
          <div className="mb-8 flex items-center justify-center">
            <span className="absolute bg-white px-2 text-sm text-[#828282]">
              아직 계정이 없으신가요?
            </span>
          </div>
          <div className="mx-6 flex flex-col items-center justify-center">
            <Button
              bgColor="bg-gray-200"
              textColor=""
              innerText="회원가입"
              onClick={() => {
                router.push("/signUp");
              }}
            />
            <Link href="/findPassword">
              <div className="mt-3 cursor-pointer text-xs text-[#828282] underline">
                비밀번호 찾기
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
