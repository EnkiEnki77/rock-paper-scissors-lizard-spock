import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Battles from "../components/Battles";
import Decision from "../components/Decision";
import MovePicker from "../components/MovePicker";
import TitleAndScore from "../components/TitleAndScore";

export type moves = null | "rock" | "paper" | "scissors" | "lizard" | "spock";

const Home: NextPage = () => {
  const [chosenMove, setChosenMove] = useState<string | null>(null);
  const [cmpMove, setCmpMove] = useState<string | null>(null);
  const moves = ["rock", "paper", "scissors", "lizard", "spock"];

  const rockDecision =
    cmpMove === "lizard" || cmpMove === "scissors" ? true : false;
  const paperDecision =
    cmpMove === "rock" || cmpMove === "spock" ? true : false;
  const scissorsDecision =
    cmpMove === "lizard" || cmpMove === "paper" ? true : false;
  const lizardDecision =
    cmpMove === "paper" || cmpMove === "spock" ? true : false;
  const spockDecision =
    cmpMove === "rock" || cmpMove === "scissors" ? true : false;

  const decision =
    chosenMove === "rock"
      ? rockDecision
      : chosenMove === "paper"
      ? paperDecision
      : chosenMove === "scissors"
      ? scissorsDecision
      : chosenMove === "lizard"
      ? lizardDecision
      : spockDecision;

  const randomCmpMove = moves[getRandomInt(5)];

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const handleChosenMove = (chosen: moves | string) => {
    setChosenMove(chosen);
    console.log(chosen);
  };

  useEffect(() => {
    setCmpMove(randomCmpMove);
  }, []);

  return (
    <div
      className="flex min-h-screen items-center relative  flex-col px-8 pt-8 pb-14 bg-gradient-to-t 
    to-[#1F3757] from-[#131537]"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleAndScore score={0} />
      {chosenMove === null ? (
        <MovePicker setChosenMove={handleChosenMove} />
      ) : (
        [
          <Battles cmpMove={cmpMove} move={chosenMove} />,
          <Decision decision={decision} />,
        ]
      )}
      <Link className="absolute bottom-[56px]" href="/rules">
        <button className=" text-white uppercase text-base font-semibold h-10 w-[128px] border rounded-[8px] border-white ">
          rules
        </button>
      </Link>
    </div>
  );
};

export default Home;
