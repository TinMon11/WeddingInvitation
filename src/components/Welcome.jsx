import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Welcome = ({
  invitationStyle,
  name1,
  name2,
}) => {
  const bgPremium = `bg-cover bg-center fixed inset-0 z-[-1] bg-premium`;
  const bgClassic = `bg-cover bg-center fixed inset-0 z-[-1] bg-classic`;
  const homeTextClassClassic = `font-handwritting2 flex flex-col items-center justify-center min-h-screen gap-4 p-2 text-black`;
  const homeTextClassPremium = `font-handwritting flex flex-col items-center justify-center min-h-screen p-2 text-white`;

  return (
    <>
      <div
        className={`${invitationStyle === "classic" ? bgClassic : bgPremium}`}
      ></div>

      <div className="relative z-[1]">
        <div className="bg-cover bg-center min-h-screen">
          <div
            className={`${
              invitationStyle === "classic"
                ? homeTextClassClassic
                : homeTextClassPremium
            }`}
          >
            {invitationStyle === "premium" && <p >¡Nos Casamos!</p>}
            <h1 className="text-8xl">{name1}</h1>
            <h1 className="text-8xl">y</h1>
            <h1 className="text-8xl">{name2}</h1>
            <h2 className={`text-3xl text-center`}>
              Nuestra Boda
            </h2>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mb-4">
          <IoIosArrowDown className={`arrow-icon`} />
        </div>
      </div>
    </>
  );
};
