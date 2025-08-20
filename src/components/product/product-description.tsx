"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  text: string;
};

export function ProductDescription({ text }: Props) {
  const [opened, setOpened] = useState(true);

  return (
    <div className="bg-white border border-gray-200 px-7 mt-22">
      <div
        className={`flex items-center justify-between py-7 ${
          opened ? "border-b" : "border-0"
        } border-gray-200 items-center`}
      >
        <div className="text-2xl">Informações do produto</div>
        <div
          onClick={() => setOpened(!opened)}
          className="cursor-pointer size-14 border border-gray-200 flex justify-center items-center rounded-sm"
        >
          <Image
            src={"/assets/ui/arrow-left-s-line.png"}
            width={24}
            height={24}
            alt=""
            className={`transition-all ${opened ? "rotate-0" : "rotate-180"}`}
          />
        </div>
      </div>
      {opened && <div className="text-gray-500 my-12">{text}</div>}
    </div>
  );
}
