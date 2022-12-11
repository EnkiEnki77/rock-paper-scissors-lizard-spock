import React, { useEffect } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[200px] flex flex-col items-center gap-4 pt-[40px]"
    >
      <h1 className="text-[56px] text-white uppercase font-bold">
        {decision ? "you win" : "you lose"}
      </h1>
      <motion.button
        whileHover={{
          scale: 1.05,
          opacity: 0.85,
          transition: { duration: 0.2 },
        }}
        onClick={playAgain}
        className="font-semibold text-base uppercase text-black bg-[#F3F3F3] w-[220px] h-12 rounded-[8px]"
      >
        play again
      </motion.button>
    </motion.div>
  );
};

export default Decision;
