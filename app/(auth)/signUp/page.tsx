"use client";

import Image from "next/image";
import { useState } from "react";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import ReadyToLogin from "@/app/components/ReadyToLogin";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validationCode, setValidationCode] = useState<string>("");
  const [isEmailValidated, setIsEmailValidated] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [completeSignUp, setCompleteSignUp] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
  const [showEmailWarning, setShowEmailWarning] = useState<boolean>(false);
  const [showPasswordWarning, setShowPasswordWarning] =
    useState<boolean>(false);
  const [showConfirmPasswordWarning, setShowConfirmPasswordWarning] =
    useState<boolean>(false);

  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div>
        <div className="pt-12 px-6 pb-8">
          <Image src="/logo.svg" width={99} height={54} alt="logo" />
        </div>
        <div className="text-center w-full">
          <div className="text-lg font-semibold mb-6">회원가입</div>
          <div className="flex flex-col items-center justify-center mx-6 pb-8 space-y-3 border-b-[1px] border-b-gray-200 relative">
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
            {isEmailValidated ? (
              <div className="w-full space-y-3">
                <Input
                  type="text"
                  placeholder="이름"
                  value={name}
                  maxLength={20}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="전공"
                  value={major}
                  maxLength={20}
                  onChange={(e) => setMajor(e.target.value)}
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
                <Input
                  type="text"
                  placeholder="전화번호"
                  value={phone}
                  maxLength={11}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/gi, "");
                    setPhone(e.target.value);
                  }}
                />
                <Input
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  maxLength={15}
                  onChange={(e) => {
                    const regex1 =
                      /(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}/;
                    if (regex1.test(e.target.value))
                      setShowPasswordWarning(false);
                    else setShowPasswordWarning(true);
                    setPassword(e.target.value);
                  }}
                />
                {showPasswordWarning ? (
                  <div className="mb-3 w-full text-start flex text-red-700 text-xs mt-1 ml-2">
                    비밀번호는 영문, 숫자, 특수문자 조합의 8~15자를 사용해야
                    합니다.
                  </div>
                ) : null}
                <Input
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  maxLength={15}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (password !== confirmPassword) {
                      setShowConfirmPasswordWarning(true);
                    }
                  }}
                />
                {showConfirmPasswordWarning ? (
                  <div className="mb-3 w-full text-start flex text-red-700 text-xs mt-1 ml-2">
                    비밀번호를 다시 한 번 확인해주세요.
                  </div>
                ) : null}
                <Button
                  bgColor="bg-black"
                  textColor="text-white"
                  innerText="회원가입"
                  onClick={() => {
                    /* sign up api*/

                    const resOk = true;
                    if (resOk) {
                      setCompleteSignUp(true);
                    }
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
              onClick={() => router.push("/login")}
            />
          </div>
        </div>
        {showModal ? <Modal text={modalText} showModal={setShowModal} /> : null}
        {completeSignUp ? (
          <ReadyToLogin text={"회원가입이 완료되었습니다."} />
        ) : null}
      </div>
    </div>
  );
}
