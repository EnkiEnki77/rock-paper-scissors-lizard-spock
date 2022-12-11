import Image from "next/image";
import React from "react";
import title from "../public/assets/ROCKPAPERSCISSORSLIZARDSPOCK.png";

type Props = {
  score: number;
};

const TitleAndScore = ({ score }: Props) => {
  return (
    <div className="rounded-[5px] w-full mb-[95px] border-white border-opacity-25 border-x-[3px] border-y-[3px] p-3 flex justify-between items-center">
      <Image className="ml-3" src={title} alt="title" />
      <div className="bg-white rounded-[4px] w-20 h-[72px] flex flex-col items-center justify-center">
        <p className="text-[10px] leading-[12px] text-[#2A45C2] font-semibold">
          score
        </p>
        <h2 className="text-[40px] font-bold leading-[40px] text-[#565468]">
          {score}
        </h2>
      </div>
    </div>
  );
};

export default TitleAndScore;
