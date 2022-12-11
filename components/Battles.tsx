import React, { useEffect, useState } from "react";
import { moves } from "../pages";
import Choice from "./Choice";

type Props = {
  move: string;
  cmpMove: string | null;
};

const Battles = ({ move, cmpMove }: Props) => {
  return (
    <div className="flex justify-between w-full md:max-w-[700px]">
      <div className="flex flex-col w-[143px] h-[182px] justify-end relative">
        <Choice
          side="left"
          move={move}
          position="top-0 left-0 right-0 mx-auto"
        />
        <p className="uppercase text-[15px] text-white font-bold text-center">
          you picked
        </p>
      </div>
      <div className="flex flex-col w-[143px] h-[182px] justify-end relative">
        <Choice
          side="right"
          move={cmpMove}
          position="top-0 left-0 right-0 mx-auto"
        />
        <p className="uppercase text-[15px] text-white font-bold text-center">
          the house picked
        </p>
      </div>
    </div>
  );
};

export default Battles;
