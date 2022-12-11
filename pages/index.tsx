import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Battles from "../components/Battles";
import Decision from "../components/Decision";
import MovePicker from "../components/MovePicker";
import TitleAndScore from "../components/TitleAndScore";
import { motion } from "framer-motion";

export type moves = null | "rock" | "paper" | "scissors" | "lizard" | "spock";

const Home: NextPage = () => {
  const [chosenMove, setChosenMove] = useState<string | null>(null);
  const [cmpMove, setCmpMove] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const moves = ["rock", "paper", "scissors", "lizard", "spock"];

  let rockDecision;
  let paperDecision;
  let scissorsDecision;
  let lizardDecision;
  let spockDecision;
  let decision: boolean | undefined;
  let decisionExplanation;

  const scissorsVsPaper = "Scissors cuts paper";
  const paperVsRock = "paper covers rock";
  const rockVsLizard = "rock crushes lizard";
  const lizardVsSpock = "lizard poisons spock";
  const spockVsScissors = "spock smashes scissors";
  const scissorsVsLizard = "scissors decapitates lizard";
  const lizardVsPaper = "lizard eats paper";
  const paperVsSpock = "paper disproves spock";
  const spockVsRock = "spock vaporizes rock";
  const rockVsScissors = "rock crushes scissors";

  (chosenMove === "scissors" && cmpMove === "paper") ||
  (chosenMove === "paper" && cmpMove === "scissors")
    ? (decisionExplanation = scissorsVsPaper)
    : (chosenMove === "paper" && cmpMove === "rock") ||
      (chosenMove === "rock" && cmpMove === "paper")
    ? (decisionExplanation = paperVsRock)
    : (chosenMove === "rock" && cmpMove === "lizard") ||
      (chosenMove === "lizard" && cmpMove === "rock")
    ? (decisionExplanation = rockVsLizard)
    : (chosenMove === "lizard" && cmpMove === "spock") ||
      (chosenMove === "spock" && cmpMove === "lizard")
    ? (decisionExplanation = lizardVsSpock)
    : (chosenMove === "spock" && cmpMove === "scissors") ||
      (chosenMove === "scissors" && cmpMove === "spock")
    ? (decisionExplanation = spockVsScissors)
    : (chosenMove === "scissors" && cmpMove === "lizard") ||
      (chosenMove === "lizard" && cmpMove === "scissors")
    ? (decisionExplanation = scissorsVsLizard)
    : (chosenMove === "lizard" && cmpMove === "paper") ||
      (chosenMove === "paper" && cmpMove === "lizard")
    ? (decisionExplanation = lizardVsPaper)
    : (chosenMove === "paper" && cmpMove === "spock") ||
      (chosenMove === "spock" && cmpMove === "paper")
    ? (decisionExplanation = paperVsSpock)
    : (chosenMove === "spock" && cmpMove === "rock") ||
      (chosenMove === "rock" && cmpMove === "spock")
    ? (decisionExplanation = spockVsRock)
    : chosenMove === cmpMove
    ? (decisionExplanation = "tied")
    : (decisionExplanation = rockVsScissors);

  if (cmpMove !== null) {
    rockDecision =
      cmpMove === "lizard" || cmpMove === "scissors" ? true : false;
    paperDecision = cmpMove === "rock" || cmpMove === "spock" ? true : false;
    scissorsDecision =
      cmpMove === "lizard" || cmpMove === "paper" ? true : false;
    lizardDecision = cmpMove === "paper" || cmpMove === "spock" ? true : false;
    spockDecision = cmpMove === "rock" || cmpMove === "scissors" ? true : false;
  }

  if (chosenMove !== null) {
    if (chosenMove === "rock") {
      decision = rockDecision;
    } else if (chosenMove === "paper") {
      decision = paperDecision;
    } else if (chosenMove === "scissors") {
      decision = scissorsDecision;
    } else if (chosenMove === "lizard") {
      decision = lizardDecision;
    } else if (chosenMove === "spock") {
      decision = spockDecision;
    }
  }

  const randomCmpMove = moves[getRandomInt(5)];

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const playAgain = () => {
    setChosenMove(null);
    setCmpMove(null);
  };

  const incrementScore = () => {
    setScore((prev) => prev + 1);
  };

  const handleChosenMove = (chosen: moves | string) => {
    setChosenMove(chosen);
    setCmpMove(randomCmpMove);
  };

  useEffect(() => {
    if (cmpMove !== null && decision) {
      incrementScore();
    }
  }, [cmpMove]);

  return (
    <div
      className="flex min-h-screen items-center relative  flex-col px-8 pt-8 pb-14 bg-gradient-to-t 
    to-[#1F3757] from-[#131537]"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleAndScore
        score={score}
        decisionExplanation={decisionExplanation}
        chosenMove={chosenMove}
      />
      {chosenMove === null ? (
        <MovePicker setChosenMove={handleChosenMove} />
      ) : (
        [
          <Battles key="battles" cmpMove={cmpMove} move={chosenMove} />,
          <Decision
            key="decision"
            decision={decision}
            playAgain={playAgain}
            incrementScore={incrementScore}
          />,
        ]
      )}
      <Link
        className="absolute bottom-[56px] md:bottom-8 md:right-8"
        href="/rules"
      >
        <motion.button
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" text-white uppercase text-base font-semibold h-10 w-[128px] border rounded-[8px] border-white "
        >
          rules
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
