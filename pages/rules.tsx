import Image from "next/image";
import React from "react";
import rulesImg from "../public/assets/Group-21.png";

type Props = {};

const rules = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-[96px] pt-[96px]">
      <h1 className="uppercase text-[32px] font-bold">rules</h1>
      <Image src={rulesImg} alt="rules image" />
    </div>
  );
};

export default rules;
