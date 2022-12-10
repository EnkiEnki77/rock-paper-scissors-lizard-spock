import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TitleAndScore from "../components/TitleAndScore";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col px-8 pt-8 bg-gradient-to-t to-[#1F3757] from-[#131537]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleAndScore score={0} />
      {/* <MoveChoice/> */}
      {/* <button>rules</button> */}
    </div>
  );
};

export default Home;
