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
        <div className="pt-12 px-6 pb-8">
          <Image src="/logo.svg" width={99} height={54} alt="logo" />
        </div>
        <div className="text-center w-full pt-40">
          <div className="text-lg font-semibold mb-6">비밀번호 찾기</div>
          <div className="flex flex-col items-center justify-center mx-6 pb-8 space-y-3 relative">
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
            <label className="w-full border-[1px] rounded-lg flex flex-row ">
              <input
                type="text"
                placeholder="학교 이메일"
                className="bg-transparent pr-28 pl-4 text-sm py-2 w-full"
                value={email}
                onChange={(e) => {
                  const regex1 = /[A-Za-z0-9]+@([a-z]+\.){1,2}[a-z]{2,}/;

                  if (regex1.test(e.target.value)) setShowEmailWarning(false);
                  else setShowEmailWarning(true);
                  setEmail(e.target.value);
                }}
              />
              <button
                className="w-[92px] bg-black text-white text-xs font-semibold px-2 py-1 mt-[6px] right-2 rounded-lg whitespace-nowrap absolute"
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
              <div className="text-start w-full text-red-700 text-xs mt-1 ml-2">
                정확한 이메일 주소를 써주세요.
              </div>
            ) : null}
            <label className="w-full border-[1px] rounded-lg flex flex-row">
              <input
                type="text"
                placeholder="인증번호"
                className="bg-transparent pr-28 pl-4 text-sm py-2 w-full"
                value={validationCode}
                maxLength={6}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/gi, "");
                  setValidationCode(e.target.value);
                }}
              />
              <button
                className="w-[92px] bg-black text-white text-xs font-semibold px-2 py-1 mt-[6px] right-2 rounded-lg whitespace-nowrap absolute"
                onClick={() => {
                  if (validationCode.length !== 6) {
                    setShowModal(true);
                    setModalText("6자리 인증번호를 정확히 입력해주세요.");
                    return;
                  }
                  /* 인증메일 검증 api */
                  const resOk = true;
                  const resMessage =
                    "인증번호가 맞지 않습니다. 다시 한 번 확인해주세요.";

                  if (resOk) {
                    setIsEmailValidated(true);
                  } else {
                    setModalText(resMessage); //"인증번호가 맞지 않습니다. 다시 한 번 시도해주세요.", "인증번호 유효시간이 지났습니다. 다시 한 번 시도해주세요.", "인증번호 발송 후 입력해주세요." 등등
                    setShowModal(true);
                  }
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
        {showModal ? <Modal text={modalText} showModal={setShowModal} /> : null}
        {isEmailValidated && completeSignUp ? (
          <ReadyToLogin text={"이메일로 임시 비밀번호가 발급되었습니다."} />
        ) : null}
      </div>
    </div>
  );
}
