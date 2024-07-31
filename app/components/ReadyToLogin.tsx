import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function ReadyToLogin({ text }: { text: string }) {
  const router = useRouter();

  return (
    <div className="fixed top-0 z-[999] h-full w-full bg-white">
      <div className="flex flex-col items-center justify-center px-6 pt-32">
        <Image src="/logo.svg" width={99} height={54} alt="logo" />
        <div className="mb-48 mt-4 text-sm font-light">
          당신을 위한 대여사업 도우미
        </div>
        <div className="mb-8 text-lg font-semibold">{text}</div>
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
