import Image from "next/image";
import React from "react";
import polygon from "../public/assets/Polygon.png";
import Choice from "./Choice";
import scissors from "../public/assets/hand.png";
import paper from "../public/assets/paper.png";
import rock from "../public/assets/003-fist.png";
import lizard from "../public/assets/lizard.png";
import spock from "../public/assets/001-five-fingers.png";
import { moves } from "../pages";
import { motion } from "framer-motion";

type Props = {
  setChosenMove: (chosen: moves | string) => void;
};

const MovePicker = ({ setChosenMove }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-[305px] w-[400px]"
    >
      <Choice
        move="scissors"
        setChosenMove={setChosenMove}
        position={" top-0 left-0 right-0 mx-auto"}
      />
      <Choice
        move="spock"
        setChosenMove={setChosenMove}
        position={"left-[45px] top-[80px]"}
      />
      <Choice
        move="paper"
        setChosenMove={setChosenMove}
        position={"right-[45px] top-[80px] "}
      />
      <Choice
        move="lizard"
        setChosenMove={setChosenMove}
        position={" left-[80px] bottom-0"}
      />
      <Choice
        move="rock"
        setChosenMove={setChosenMove}
        position={" right-[80px] bottom-0"}
      />
      <Image
        className="absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto"
        src={polygon}
        alt=""
      />
    </motion.div>
  );
};

export default MovePicker;
