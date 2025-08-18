"use client";

import { useState } from "react";
import Image from "next/image";

import { FilterItem } from "./filter-item";

export function FilterGroup() {
  const [opened, setOpened] = useState(true);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex-1 font-bold text-xl">Nome do grupo</div>
        <div
          onClick={() => setOpened(!opened)}
          className="size-8 cursor-pointer flex justify-center items-center"
        >
          <Image
            src={"/assets/ui/arrow-left-s-line.png"}
            alt=""
            width={24}
            height={24}
            className={`${opened ? "rotate-0" : "rotate-180"} transition-all`}
          />
        </div>
      </div>
      <div
        className={`overflow-y-hidden ${
          opened ? "max-h-96" : "max-h-0"
        } transition-all`}
      >
        <FilterItem id={1} label={"item1"} />
        <FilterItem id={2} label={"item2"} />
        <FilterItem id={3} label={"item3"} />
      </div>
    </div>
  );
}
