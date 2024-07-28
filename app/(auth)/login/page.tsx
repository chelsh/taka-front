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
        <div className="flex flex-col items-center justify-center pt-32 pb-12 space-y-4">
          <Image src="/logo.svg" width={99} height={54} alt="logo" />
          <div className="text-sm font-light">당신을 위한 대여사업 도우미</div>
        </div>
        <div className="text-center w-full">
          <div className="text-lg font-semibold mb-6">로그인</div>
          <div className="flex flex-col items-center justify-center space-y-3 mx-6 pb-8 border-b-[1px] border-b-gray-200">
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
            {showEmailWarning ? (
              <div className="mb-3 text-start w-full text-red-700 text-xs mt-1 ml-2">
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
              <div className="mb-3 w-full text-start flex text-red-700 text-xs mt-1 ml-2">
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
          <div className="flex justify-center items-center mb-8">
            <span className="bg-white text-sm text-[#828282] absolute px-2">
              아직 계정이 없으신가요?
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mx-6">
            <Button
              bgColor="bg-gray-200"
              textColor=""
              innerText="회원가입"
              onClick={() => {
                router.push("/signUp");
              }}
            />
            <Link href="/findPassword">
              <div className="underline text-[#828282] text-xs mt-3 cursor-pointer">
                비밀번호 찾기
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
