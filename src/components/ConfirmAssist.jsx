import React from "react";

export const ConfirmAssist = () => {
  return (
    <div className="w-full text-center bg-white h-80 text-black flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">CONFIRMACION DE ASISTENCIA</h1>
      <h2 className="text-xl">
        Os esperamos en este gran día. ¡Confírmanos tu asistencia!
      </h2>
      <button className="text-md mt-6 bg-[#9aaa9a] text-white rounded-full py-2 w-60
      hover:bg-white hover:text-[#9aaa9a] hover:border-[#9aaa9a] border-[1px] border-[#9aaa9a]
      transition duration-300 ease-in-out transform">
        CONFIRMAR ASISTENCIA
      </button>
    </div>
  );
};
