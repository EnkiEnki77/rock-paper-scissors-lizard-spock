import React from "react";

type Props = {
  decision: boolean;
};

const Decision = ({ decision }: Props) => {
  return (
    <div className="w-full h-[200px] flex flex-col items-center gap-4">
      <h1 className="text-[56px] text-white uppercase font-bold">
        {decision ? "you win" : "you lose"}
      </h1>
      <button className="font-semibold text-base uppercase text-black bg-[#F3F3F3] w-[220px] h-12 rounded-[8px]">
        play again
      </button>
    </div>
  );
};

export default Decision;
