"use client";

import Image from "next/image";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Home() {
  const [accountExist, setAccountExist] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validationCode, setValidationCode] = useState<string>("");
  const [showEmailWarning, setShowEmailWarning] = useState<boolean>(false);
  const [showPasswordWarning, setShowPasswordWarning] =
    useState<boolean>(false);
  const [isEmailValidated, setIsEmailValidated] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div className="flex flex-col">
      {accountExist ? (
        <div>
          <div className="flex flex-col items-center justify-center pt-32 pb-12 space-y-4">
            <Image src="/logo.svg" width={99} height={54} alt="logo" />
            <div className="text-sm font-light">
              당신을 위한 대여사업 도우미
            </div>
          </div>
          <div className="text-center w-full">
            <div className="text-lg font-semibold mb-6">로그인</div>
            <div className="flex flex-col items-center justify-center mx-6 pb-8 border-b-[1px] border-b-gray-200">
              <Input
                type="text"
                placeholder="학교 이메일"
                value={email}
                onChange={(e) => {
                  const regex1 = new RegExp("[A-Za-z0-9]+@[a-z]+.[a-z]");
                  const regex2 = new RegExp("[A-Za-z0-9]+@[a-z]+.[a-z]+.[a-z]");
                  if (
                    regex1.test(e.target.value) ||
                    regex2.test(e.target.value)
                  )
                    setShowEmailWarning(false);
                  else setShowEmailWarning(true);
                  setEmail(e.target.value);
                }}
              />
              <div className="mb-3 w-full flex">
                {showEmailWarning ? (
                  <div className="text-red-700 text-xs mt-1 ml-3">
                    정확한 이메일 주소를 써주세요.
                  </div>
                ) : null}
              </div>
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => {
                  const regex1 = new RegExp("[A-Za-z0-9*!]");
                  if (regex1.test(e.target.value))
                    setShowPasswordWarning(false);
                  else setShowPasswordWarning(true);
                  setPassword(e.target.value);
                }}
              />
              <div className="mb-3 w-full flex">
                {showPasswordWarning ? (
                  <div className="text-red-700 text-xs mt-1 ml-3">
                    비밀번호에는 영문(대/소문자), 숫자, 특수문자(*, !)만 입력
                    가능합니다.
                  </div>
                ) : null}
              </div>
              <Button
                bgColor="bg-black"
                textColor="text-white"
                innerText="로그인"
                onClick={() => {
                  /* login api*/
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
                  setAccountExist((prev) => !prev);
                  setEmail("");
                  setPassword("");
                }}
              />
              <div className="underline text-[#828282] text-xs mt-3 cursor-pointer">
                비밀번호 찾기
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="pt-12 px-6 pb-8">
            <Image src="/logo.svg" width={99} height={54} alt="logo" />
          </div>
          <div className="text-center w-full">
            <div className="text-lg font-semibold mb-6">회원가입</div>
            <div className="flex flex-col items-center justify-center mx-6 pb-8 space-y-4 border-b-[1px] border-b-gray-200 relative">
              <label className="w-full border-[1px] rounded-lg flex flex-row ">
                <input
                  type="text"
                  placeholder="학교 이메일"
                  className="bg-transparent pr-24 px-4 text-sm py-2 w-full"
                  value={email}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(
                      /[^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$]/gi,
                      ""
                    );
                    setEmail(e.target.value);
                  }}
                />
                <button className="w-[82px] bg-black text-white text-xs font-semibold px-2 py-1 mt-[6px] ml-56 rounded-lg whitespace-nowrap absolute">
                  인증메일 발송
                </button>
              </label>
              <label className="w-full border-[1px] rounded-lg flex flex-row relative">
                <input
                  type="text"
                  placeholder="인증번호"
                  className="bg-transparent pr-24 px-4 text-sm py-2 w-full"
                  value={validationCode}
                  maxLength={6}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/gi, "");
                    setValidationCode(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    // 이메일 인증번호 검증 후 state 변경
                    setIsEmailValidated(true);
                  }}
                  className="w-[82px] bg-black text-white text-xs font-semibold px-2 py-1 mt-[6px] ml-56 rounded-lg whitespace-nowrap absolute"
                >
                  인증하기
                </button>
              </label>
              {isEmailValidated ? (
                <div className="w-full space-y-4">
                  <Input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="학번"
                    value={studentId}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/gi, "");
                      setStudentId(e.target.value);
                    }}
                  />
                  <Input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <Input
                    type="password"
                    placeholder="비밀번호 확인"
                    value={password}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <Button
                    bgColor="bg-black"
                    textColor="text-white"
                    innerText="회원가입"
                    onClick={() => {
                      /* sign up api*/
                    }}
                  />
                </div>
              ) : null}
            </div>
            <div className="flex justify-center items-center mb-8">
              <span className="bg-white text-sm text-[#828282] absolute px-2">
                이미 계정이 있으신가요?
              </span>
            </div>
            <div className="flex flex-col items-center justify-center mx-6">
              <Button
                bgColor="bg-gray-200"
                textColor=""
                innerText="로그인"
                onClick={() => setAccountExist((prev) => !prev)}
              />
              <div className="underline text-[#828282] text-xs mt-3 cursor-pointer">
                비밀번호 찾기
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
