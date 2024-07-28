import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function ReadyToLogin({ text }: { text: string }) {
  const router = useRouter();

  return (
    <div className="w-full h-full bg-white fixed z-[999] top-0">
      <div className="flex flex-col items-center justify-center pt-32  px-6">
        <Image src="/logo.svg" width={99} height={54} alt="logo" />
        <div className="text-sm mt-4 mb-48 font-light">
          당신을 위한 대여사업 도우미
        </div>
        <div className="text-lg mb-8 font-semibold">{text}</div>
        <Button
          bgColor="bg-black"
          textColor="text-white"
          innerText="로그인 하러 가기"
          onClick={() => {
            router.push("/login");
          }}
        />
      </div>
    </div>
  );
}
