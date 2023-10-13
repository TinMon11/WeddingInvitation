import React from "react";

const DaySection = ({backgroundColor}) => {
  return (
    <div className={`w-full bg-[${backgroundColor}] h-32 flex flex-col items-center justify-center gap-4 p-2`}>
      <h2 className="text-xl text-white">Listo...</h2>
      <h1 className="text-2xl text-white">¡Llegó el gran día!</h1>
    </div>
  );
};

export default DaySection;
