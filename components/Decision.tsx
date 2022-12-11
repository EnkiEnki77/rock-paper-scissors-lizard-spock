import React, { useEffect } from "react";

type Props = {
  decision: boolean | undefined;
  playAgain: () => void;
  incrementScore: () => void;
};

const Decision = ({ decision, playAgain, incrementScore }: Props) => {
  // if (decision) {
  //   incrementScore();
  // }

  console.log(decision);

  useEffect(() => {}, []);
  return (
    <div className="w-full h-[200px] flex flex-col items-center gap-4 pt-[40px]">
      <h1 className="text-[56px] text-white uppercase font-bold">
        {decision ? "you win" : "you lose"}
      </h1>
      <button
        onClick={playAgain}
        className="font-semibold text-base uppercase text-black bg-[#F3F3F3] w-[220px] h-12 rounded-[8px]"
      >
        play again
      </button>
    </div>
  );
};

export default Decision;
