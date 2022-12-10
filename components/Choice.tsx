import Image, { StaticImageData } from "next/image";
import React from "react";
import { moves } from "../pages";
import scissors from "../public/assets/hand.png";
import paper from "../public/assets/paper.png";
import rock from "../public/assets/003-fist.png";
import lizard from "../public/assets/lizard.png";
import spock from "../public/assets/001-five-fingers.png";

type Props = {
  position: string;
  move: moves | string;
  setChosenMove?: (chosen: moves | string) => void;
};

const Choice = ({ position, setChosenMove, move }: Props) => {
  const color =
    move === "scissors"
      ? "bg-[#EB9F0E] shadow-[#C76C1B]"
      : move === "spock"
      ? "bg-[#3FB7CD] shadow-[#2D8DAB]"
      : move === "paper"
      ? "bg-[#4664F4] shadow-[#2A45C2] "
      : move === "lizard"
      ? "bg-[#834EE3] shadow-[#5F37A8]"
      : "bg-[#DB2E4D] shadow-[#9D1634]";

  const img =
    move === "scissors"
      ? scissors
      : move === "spock"
      ? spock
      : move === "paper"
      ? paper
      : move === "lizard"
      ? lizard
      : rock;
  return (
    <div
      onClick={() => setChosenMove !== undefined && setChosenMove(move)}
      className={`${
        setChosenMove === undefined
          ? "w-[133px] h-[130px]"
          : "w-[98px] h-[94px]"
      } z-20 ${color} ${position} shadow-[0px_4px_0px]  rounded-full flex items-center justify-center absolute`}
    >
      <div
        className={`${
          setChosenMove === undefined
            ? "w-[100px] h-[100px]"
            : "w-[73px] h-[69px]"
        } shadow-[inset_0px_3px_0px] shadow-[#BABFD4] bg-white rounded-full flex items-center justify-center`}
      >
        <div className=" flex items-center justify-center">
          <Image src={img} alt={move !== null ? move : ""} />
        </div>
      </div>
    </div>
  );
};

export default Choice;
