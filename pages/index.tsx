import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MovePicker from "../components/MovePicker";
import TitleAndScore from "../components/TitleAndScore";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center relative  flex-col px-8 pt-8 pb-14 bg-gradient-to-t to-[#1F3757] from-[#131537]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleAndScore score={0} />
      <MovePicker />
      <Link className="absolute bottom-[56px]" href="/rules">
        <button className=" text-white uppercase text-base font-semibold h-10 w-[128px] border rounded-[8px] border-white ">
          rules
        </button>
      </Link>
    </div>
  );
};

export default Home;
