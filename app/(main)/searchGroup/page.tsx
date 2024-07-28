"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { groupsType } from "@/app/lib/constants";

export default function SearchGroup() {
  const groups = [
    { id: 0, belong: "애기능동아리", group: "FLIP" },
    { id: 1, belong: "생명과학대학", group: "식품공학과" },
    { id: 2, belong: "생명과학대학", group: "식품공학과" },
    { id: 3, belong: "생명과학대학", group: "식품공학과" },
  ];

  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredGroups, setFilteredGroups] = useState<groupsType>(groups);

  useEffect(() => {
    if (searchInput) {
      const filtered = groups.filter(
        (group) =>
          group.belong.includes(searchInput) ||
          group.group.includes(searchInput)
      );
      setFilteredGroups(filtered);
    } else {
      setFilteredGroups(groups);
    }
  }, [searchInput]);

  return (
    <div>
      <div className="px-4 pt-16 pb-4 text-xl font-semibold">단위 검색</div>
      <div className="flex flex-row mx-4 border-[1px] space-x-2 border-[#E0E0E0] px-3 py-2 rounded-lg">
        <Image src="/searchIcon.svg" width={24} height={24} alt="searchIcon" />
        <input
          placeholder="Search"
          value={searchInput}
          className="w-full focus:outline-none font-normal"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="flex flex-row text-center py-[10px] text-[#828282] mt-4 mx-2 border-b-[1px] font-medium text-sm">
        <div className="flex-[2]">소속</div>
        <div className="flex-[2]">단위</div>
        <div className="flex-1">신청</div>
      </div>
      {filteredGroups.map((group, idx) => (
        <div
          key={idx}
          className="flex py-3 flex-row text-center mx-2 border-b-[1px] font-normal text-sm opacity-90"
        >
          <div className="flex-[2] leading-7">{group.belong}</div>
          <div className="flex-[2] leading-7">{group.group}</div>
          <div className="flex-1">
            <button className="bg-black text-white text-xs font-semibold py-[6px] px-5 rounded-lg">
              신청
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
