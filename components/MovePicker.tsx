import Image from "next/image";
import React from "react";
import polygon from "../public/assets/Polygon.png";
import Choice from "./Choice";
import scissors from "../public/assets/hand.png";
import paper from "../public/assets/paper.png";
import rock from "../public/assets/003-fist.png";
import lizard from "../public/assets/lizard.png";
import spock from "../public/assets/001-five-fingers.png";

type Props = {};

const MovePicker = (props: Props) => {
  return (
    <div className="relative h-[305px] w-full">
      <Choice
        colorAndPosition={
          "bg-[#EB9F0E] shadow-[#C76C1B] top-0 left-0 right-0 mx-auto"
        }
        choice={scissors}
      />
      <Choice
        colorAndPosition={
          "bg-[#3FB7CD] shadow-[#2D8DAB] left-[45px] top-[80px]"
        }
        choice={spock}
      />
      <Choice
        colorAndPosition={
          "bg-[#4664F4] shadow-[#2A45C2] right-[45px] top-[80px] "
        }
        choice={paper}
      />
      <Choice
        colorAndPosition={"bg-[#834EE3] shadow-[#5F37A8] left-[80px] bottom-0"}
        choice={lizard}
      />
      <Choice
        colorAndPosition={"bg-[#DB2E4D] shadow-[#9D1634] right-[80px] bottom-0"}
        choice={rock}
      />
      <Image
        className="absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto"
        src={polygon}
        alt=""
      />
    </div>
  );
};

export default MovePicker;
