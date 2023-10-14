import React from "react";
import { CiHeart } from "react-icons/ci";


const DaySection = ({ invitationStyle }) => {
  const classicStyle =
    "w-full bg-[#D28D66] h-32 flex flex-col items-center justify-center gap-4 p-2";
  const premiumStyle =
    "w-full bg-[#011627] h-32 flex flex-col items-center justify-center gap-4 p-2";

  return (
    <>
      {invitationStyle === "classic" ? (
        <div className={`${classicStyle}`}>
          <h2 className="text-xl text-white">Listo...</h2>
          <h1 className="text-2xl text-white">¡Llegó el gran día!</h1>
        </div>
      ) : (
        <div className={`${premiumStyle} text-center`}>
          <CiHeart
          className={`heart-icon`}
          />
          <h1 className="text-3xl text-white font-handwritting2">
            Queremos celebrar junto a vos este momento tan especial para
            nosotros...
          </h1>
        </div>
      )}
    </>
  );
};

export default DaySection;
