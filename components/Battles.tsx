import React, { useEffect, useState } from "react";
import { moves } from "../pages";
import Choice from "./Choice";

type Props = {
  move: "rock" | "paper" | "scissors" | "lizard" | "spock" | string;
  cmpMove: string | null;
};

const Battles = ({ move, cmpMove }: Props) => {
  console.log();
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col w-[143px] h-[182px] justify-end relative">
        <Choice move={move} position="top-0 left-0 right-0 mx-auto" />
        <p className="uppercase text-[15px] text-white font-bold text-center">
          you picked
        </p>
      </div>
      <div className="flex flex-col w-[143px] h-[182px] justify-end relative">
        <Choice move={cmpMove} position="top-0 left-0 right-0 mx-auto" />
        <p className="uppercase text-[15px] text-white font-bold text-center">
          the house picked
        </p>
      </div>
    </div>
  );
};

export default Battles;
