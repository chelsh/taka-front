"use client";

import Image from "next/image";
import { useState } from "react";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import ReadyToLogin from "@/app/components/ReadyToLogin";
import { fetchUrl } from "@/app/lib/constants";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
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
        <div className="px-6 pb-8 pt-12">
          <Image src="/logo.svg" width={99} height={54} alt="logo" />
        </div>
        <div className="w-full text-center">
          <div className="mb-6 text-lg font-semibold">회원가입</div>
          <div className="relative mx-6 flex flex-col items-center justify-center space-y-3 border-b-[1px] border-b-gray-200 pb-8">
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
                onClick={async (e) => {
                  if (showEmailWarning || !email) {
                    setShowModal(true);
                    setModalText("이메일 주소를 다시 한 번 확인해주세요.");
                    return;
                  }
                  /* 인증메일 발송 api */
                  const resData = await (
                    await fetch(
                      `${fetchUrl}/api/auth/send-verification-code?email=${email}`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      },
                    )
                  ).json();

                  //resData에 에러 메시지 있으면 더 좋을듯?

                  if (resData.status == 200) {
                    const eventTarget = e.target as HTMLElement;
                    eventTarget.innerText = "인증메일 재발송";
                    setModalText("인증메일이 발송되었습니다.");
                    setShowModal(true);
                  } else {
                    setModalText(
                      "문제가 발생했습니다. 다시 한 번 시도해주세요.",
                    ); //"인증메일 발송에 실패했습니다. 다시 한 번 시도해주세요." 등
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
                value={verificationCode}
                maxLength={6}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/gi, "");
                  setVerificationCode(e.target.value);
                }}
              />
              <button
                className="absolute right-2 mt-[6px] w-[92px] whitespace-nowrap rounded-lg bg-black px-2 py-1 text-xs font-semibold text-white"
                onClick={async () => {
                  if (verificationCode.length !== 6) {
                    setShowModal(true);
                    setModalText("6자리 인증번호를 정확히 입력해주세요.");
                    return;
                  }
                  /* 인증메일 검증 api */
                  const resData = await (
                    await fetch(
                      `${fetchUrl}/api/auth/verify-code?email=${email}&verificationCode=${verificationCode}`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      },
                    )
                  ).json();

                  if (resData.status == 200) setIsEmailVerified(true);
                  setModalText("인증되었습니다."); //"인증번호가 맞지 않습니다. 다시 한 번 시도해주세요.", "인증번호 유효시간이 지났습니다. 다시 한 번 시도해주세요.", "인증번호 발송 후 입력해주세요." 등등
                  setShowModal(true);
                }}
              >
                인증하기
              </button>
            </label>
            {isEmailVerified ? (
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
                  <div className="mb-3 ml-2 mt-1 flex w-full text-start text-xs text-red-700">
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
                  <div className="mb-3 ml-2 mt-1 flex w-full text-start text-xs text-red-700">
                    비밀번호를 다시 한 번 확인해주세요.
                  </div>
                ) : null}
                <Button
                  bgColor="bg-black"
                  textColor="text-white"
                  innerText="회원가입"
                  onClick={async () => {
                    /* sign up api*/
                    const resData = await (
                      await fetch(
                        `${fetchUrl}/api/auth/signup?email=${email}&verificationCode=${verificationCode}`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            email,
                            password,
                            name,
                            major,
                            studentNum: studentId,
                            phoneNumber: phone,
                            role: "USER",
                            verificationCode,
                          }),
                        },
                      )
                    ).json();

                    if (resData.status == 200) {
                      setCompleteSignUp(true);
                    }
                  }}
                />
              </div>
            ) : null}
          </div>
          <div className="mb-8 flex items-center justify-center">
            <span className="absolute bg-white px-2 text-sm text-[#828282]">
              이미 계정이 있으신가요?
            </span>
          </div>
          <div className="mx-6 flex flex-col items-center justify-center">
            <Button
              bgColor="bg-gray-200"
              textColor=""
              innerText="로그인"
              onClick={() => router.push("/login")}
            />
          </div>
        </div>
        {showModal ? (
          <Modal text={modalText} cancelable={false} setShowModal={setShowModal} />
        ) : null}
        {completeSignUp ? (
          <ReadyToLogin text={"회원가입이 완료되었습니다."} />
        ) : null}
      </div>
    </div>
  );
}
