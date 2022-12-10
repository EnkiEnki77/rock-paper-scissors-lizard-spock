import Image, { StaticImageData } from "next/image";
import React from "react";
import { moves } from "../pages";

type Props = {
  colorAndPosition: string;
  choice: StaticImageData;
  move: moves;
  setChosenMove: (chosen: moves) => void;
};

const Choice = ({ colorAndPosition, choice, setChosenMove, move }: Props) => {
  return (
    <div
      onClick={() => setChosenMove(move)}
      className={`w-[98px] h-[94px] z-20 ${colorAndPosition} shadow-[0px_4px_0px]  rounded-full flex items-center justify-center absolute`}
    >
      <div
        className={`w-[73px]  h-[69px] shadow-[inset_0px_3px_0px] shadow-[#BABFD4] bg-white rounded-full flex items-center justify-center`}
      >
        <div className=" flex items-center justify-center">
          <Image src={choice} alt="scissors" />
        </div>
      </div>
    </div>
  );
};

export default Choice;
