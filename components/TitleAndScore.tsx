import Image from "next/image";
import React from "react";
import title from "../public/assets/ROCKPAPERSCISSORSLIZARDSPOCK.png";
import { motion } from "framer-motion";

type Props = {
  score: number;
  decisionExplanation: string;
  chosenMove: string | null;
};

const TitleAndScore = ({ score, decisionExplanation, chosenMove }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-[5px] w-full mb-[95px] border-white border-opacity-25 md:max-w-[700px] border-x-[3px] border-y-[3px] p-3 flex justify-between items-center"
    >
      <Image className="ml-3" src={title} alt="title" />
      {chosenMove && (
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-white w-1/2 text-center px-2 uppercase font-bold z-0`}
        >
          {decisionExplanation}
        </motion.h2>
      )}
      <div className="bg-white rounded-[4px] w-20 h-[72px] flex flex-col items-center justify-center">
        <p className="text-[10px] leading-[12px] text-[#2A45C2] font-semibold">
          score
        </p>
        <h2 className="text-[40px] font-bold leading-[40px] text-[#565468]">
          {score}
        </h2>
      </div>
    </motion.div>
  );
};

export default TitleAndScore;
