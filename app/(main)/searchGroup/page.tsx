"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { groupsType } from "@/app/lib/constants";
import Modal from "@/app/components/Modal";

export default function SearchGroup() {
  const groups = [
    { id: 0, belong: "애기능동아리", group: "FLIP" },
    { id: 1, belong: "생명과학대학", group: "식품공학과" },
    { id: 2, belong: "생명과학대학", group: "식품공학과" },
    { id: 3, belong: "생명과학대학", group: "식품공학과" },
    { id: 3, belong: "생명과학대학", group: "식품공학과" },
    { id: 3, belong: "생명과학대학", group: "식품공학과" },
    { id: 3, belong: "생명과학대학", group: "식품공학과" },
  ];

  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredGroups, setFilteredGroups] = useState<groupsType>(groups);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedGroupId, setSelectedGroupId] = useState<number>();

  useEffect(() => {
    if (searchInput) {
      const filtered = groups.filter(
        (group) =>
          group.belong.includes(searchInput) ||
          group.group.includes(searchInput),
      );
      setFilteredGroups(filtered);
    } else {
      setFilteredGroups(groups);
    }
  }, [searchInput]);

  function callJoinGroupApi() {
    return true;
  }

  return (
    <div>
      <div className="px-4 pb-4 pt-16 text-xl font-semibold">단위 검색</div>
      <div className="mx-4 flex flex-row space-x-2 rounded-lg border-[1px] border-[#E0E0E0] px-3 py-2">
        <Image src="/searchIcon.svg" width={24} height={24} alt="searchIcon" />
        <input
          placeholder="Search"
          value={searchInput}
          className="w-full font-normal focus:outline-none"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="mx-2 mt-4 flex flex-row border-b-[1px] py-[10px] text-center text-sm font-medium text-[#828282]">
        <div className="flex-[2]">소속</div>
        <div className="flex-[2]">단위</div>
        <div className="flex-1">신청</div>
      </div>
      {filteredGroups.map((group, idx) => (
        <div
          key={idx}
          className="mx-2 flex flex-row border-b-[1px] py-3 text-center text-sm font-normal"
        >
          <div className="flex-[2] leading-7">{group.belong}</div>
          <div className="flex-[2] leading-7">{group.group}</div>
          <div className="flex-1">
            <button
              className="rounded-lg bg-black px-4 py-[6px] text-xs font-semibold text-white"
              onClick={() => setShowModal(true)}
            >
              신청
            </button>
          </div>
        </div>
      ))}
      {showModal ? (
        <Modal
          text={`''에 가입 신청하시겠습니까?`}
          cancelable={true}
          setShowModal={setShowModal}
          callback={callJoinGroupApi}
        />
      ) : null}
    </div>
  );
}
