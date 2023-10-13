import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Welcome = ({
  background,
  name1,
  name2,
  homeTextColor,
  homeTextFontStyle,
}) => {
  const bgClass = `bg-cover bg-center fixed inset-0 z-[-1] bg-[url('./assets/${background}.jpg')]`;
  const homeTextClass = `font-${homeTextFontStyle} flex flex-col items-center justify-center min-h-screen gap-4 p-2 ${homeTextColor}`;

  return (
    <>
      <div className={bgClass}></div>
      <div className="relative z-[1]">
        <div className="bg-cover bg-center min-h-screen">
          <div className={homeTextClass}>
            <h1 className="text-8xl">{name1}</h1>
            <h1 className="text-8xl">y</h1>
            <h1 className="text-8xl">{name2}</h1>
            <h2 className={`text-3xl text-center ${homeTextColor}`}>
              Nuestra Boda
            </h2>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mb-4">
          <IoIosArrowDown className={`arrow-icon ${homeTextColor}`} />
        </div>
      </div>
    </>
  );
};
