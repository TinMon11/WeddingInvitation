import React, { useEffect } from "react";
import DaySection from "./components/DaySection";
import { Ceremony } from "./components/Ceremony";
import { AboutUs } from "./components/AboutUs";
import Gifts from "./components/Gifts";
import { ConfirmAssist } from "./components/ConfirmAssist";
import { DressCode } from "./components/DressCode";
import { Instagram } from "./components/Instagram";
import { Songs } from "./components/Songs";
import { Information } from "./components/Information";
import { IoIosArrowDown } from "react-icons/io";
const App = () => {

  return (
    <>
      <div className="bg-cover bg-center fixed inset-0 z-[-1] bg-[url('./assets/background.jpg')]"></div>
      <div className="relative z-[1]">
        <div className="bg-cover bg-center min-h-screen">
          <div className="font-handwritting2 flex flex-col items-center justify-center min-h-screen gap-4 p-2">
            <h1 className="text-8xl">Marta</h1>
            <h1 className="text-8xl">y</h1>
            <h1 className="text-8xl">Antonio</h1>
            <h2 className="text-3xl text-center text-gray-700">Nuestra Boda</h2>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mb-4">
          <IoIosArrowDown className="arrow-icon text-black" />
        </div>
      </div>
      <DaySection />
      <Ceremony />
      <AboutUs />
      <Gifts />
      <ConfirmAssist />
      <DressCode />
      <Instagram />
      <Songs />
      <Information />
    </>
  );
};

export default App;
