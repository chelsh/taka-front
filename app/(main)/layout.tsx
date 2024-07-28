"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div>
      {children}
      <div className="bg-white z-[999] border-t-[1px] border-t-gray-200 fixed bottom-0 w-full pb-8 flex flex-row justify-between">
        <Link href="/rent">
          <Image
            src={
              pathname === "/rent" || pathname === "/rent/itemDetail"
                ? "/blackRentBtn.svg"
                : "/grayRentBtn.svg"
            }
            width={75}
            height={49}
            alt="대여하기"
            className=""
          />
        </Link>
        <Link href="/searchGroup">
          <Image
            src={
              pathname === "/searchGroup"
                ? "/blackSearchGroupBtn.svg"
                : "/graySearchGroupBtn.svg"
            }
            width={75}
            height={49}
            alt="단위 검색"
          />
        </Link>
        <Link href="/return">
          <Image
            src={
              pathname === "/return"
                ? "/blackReturnBtn.svg"
                : "/grayReturnBtn.svg"
            }
            width={75}
            height={49}
            alt="반납하기"
          />
        </Link>
        <Link href="/rentalHistory">
          <Image
            src={
              pathname === "/rentalHistory"
                ? "/blackRentalHistoryBtn.svg"
                : "/grayRentalHistoryBtn.svg"
            }
            width={75}
            height={49}
            alt="대여 기록"
          />
        </Link>
        <Link href="/profile">
          <Image
            src={
              pathname === "/profile"
                ? "/blackProfileBtn.svg"
                : "/grayProfileBtn.svg"
            }
            width={75}
            height={49}
            alt="내 정보"
          />
        </Link>
      </div>
    </div>
  );
}
