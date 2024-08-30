"use client";

import Image from "next/image";
import { useState } from "react";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import ReadyToLogin from "@/app/components/ReadyToLogin";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [validationCode, setValidationCode] = useState<string>("");
  const [isEmailValidated, setIsEmailValidated] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");
  const [completeSignUp, setCompleteSignUp] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
  const [showEmailWarning, setShowEmailWarning] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div>
        <div className="px-6 pb-8 pt-12">
          <Image src="/logo.svg" width={99} height={54} alt="logo" />
        </div>
        <div className="w-full pt-40 text-center">
          <div className="mb-6 text-lg font-semibold">비밀번호 찾기</div>
          <div className="relative mx-6 flex flex-col items-center justify-center space-y-3 pb-8">
            <Input
              type="text"
              placeholder="이름"
              value={name}
              maxLength={20}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="학번"
              value={studentId}
              maxLength={10}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/gi, "");
                setStudentId(e.target.value);
              }}
            />
            <label className="flex w-full flex-row rounded-lg border-[1px]">
              <input
                type="text"
                placeholder="학교 이메일"
                className="w-full bg-transparent py-2 pl-4 pr-28 text-sm"
                value={email}
                onChange={(e) => {
                  const regex1 = /[A-Za-z0-9]+@([a-z]+\.){1,2}[a-z]{2,}/;

                  if (regex1.test(e.target.value)) setShowEmailWarning(false);
                  else setShowEmailWarning(true);
                  setEmail(e.target.value);
                }}
              />
              <button
                className="absolute right-2 mt-[6px] w-[92px] whitespace-nowrap rounded-lg bg-black px-2 py-1 text-xs font-semibold text-white"
                onClick={(e) => {
                  if (showEmailWarning || !email) {
                    setShowModal(true);
                    setModalText("이메일 주소를 다시 한 번 확인해주세요.");
                    return;
                  }
                  /* 인증메일 발송 api */
                  const resOk = true;
                  const resMessage = "인증메일이 발송되었습니다.";

                  if (resOk) {
                    const eventTarget = e.target as HTMLElement;
                    eventTarget.innerText = "인증메일 재발송";
                    setModalText(resMessage);
                    setShowModal(true);
                  } else {
                    setModalText(resMessage); //"인증메일 발송에 실패했습니다. 다시 한 번 시도해주세요." 등
                    setShowModal(true);
                  }
                }}
              >
                인증메일 발송
              </button>
            </label>
            {showEmailWarning ? (
              <div className="ml-2 mt-1 w-full text-start text-xs text-red-700">
                정확한 이메일 주소를 써주세요.
              </div>
            ) : null}
            <label className="flex w-full flex-row rounded-lg border-[1px]">
              <input
                type="text"
                placeholder="인증번호"
                className="w-full bg-transparent py-2 pl-4 pr-28 text-sm"
                value={validationCode}
                maxLength={6}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/gi, "");
                  setValidationCode(e.target.value);
                }}
              />
              <button
                className="absolute right-2 mt-[6px] w-[92px] whitespace-nowrap rounded-lg bg-black px-2 py-1 text-xs font-semibold text-white"
                onClick={() => {
                  if (validationCode.length !== 6) {
                    setShowModal(true);
                    setModalText("6자리 인증번호를 정확히 입력해주세요.");
                    return;
                  }
                  /* 인증메일 검증 api */
                  const resOk = true;
                  const resMessage = "인증되었습니다.";

                  if (resOk) {
                    setIsEmailValidated(true);
                  }
                  setModalText(resMessage); //"인증번호가 맞지 않습니다. 다시 한 번 시도해주세요.", "인증번호 유효시간이 지났습니다. 다시 한 번 시도해주세요.", "인증번호 발송 후 입력해주세요." 등등
                  setShowModal(true);
                }}
              >
                인증하기
              </button>
            </label>
            <Button
              bgColor="bg-black"
              textColor="text-white"
              innerText="임시 비밀번호 발급받기"
              onClick={() => {
                /* 임시 비밀번호 발급 api*/

                const resOk = true;
                if (resOk) {
                  setCompleteSignUp(true);
                }
              }}
            />
          </div>
        </div>
        {showModal ? (
          <Modal text={modalText} cancelable={false} setShowModal={setShowModal} />
        ) : null}
        {isEmailValidated && completeSignUp ? (
          <ReadyToLogin text={"이메일로 임시 비밀번호가 발급되었습니다."} />
        ) : null}
      </div>
    </div>
  );
}
