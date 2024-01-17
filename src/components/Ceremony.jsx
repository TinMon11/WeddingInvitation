import React from "react";

export const Ceremony = () => {
  return (
    <div className="pt-24 bg-white flex flex-row gap-12 flex-wrap justify-evenly mb-12 w-full">
      {/* <div className="flex flex-col w-96 text-center items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1683/1683840.png"
          alt="icon-ceremony"
          className="w-20 h-20 mb-6"
        />
        <h2 className="text-2xl font-medium mb-6">CEREMONIA</h2>
        <h3>17 de Febrero de 2024</h3>
        <h3>19:30 horas</h3>
        <h3>Hospedaje San Francisco</h3>
        <a
          target="_blank"
          rel="noopener"
          href="https://maps.app.goo.gl/1HMF46FQdFY1fxDF9"
        >
          <button
            className="mt-6 bg-[#BD8C39] text-white rounded-full py-2 w-72 
          hover:bg-white hover:text-[#BD8C39] hover:border-[#BD8C39] border-[1px] border-[#BD8C39]
          transition duration-300 ease-in-out transform
          "
          >
            LLEGAR A LA CEREMONIA
          </button>
        </a>
      </div> */}
      <div className="flex flex-col w-96 text-center items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1274/1274415.png"
          alt="icon-ceremony"
          className="w-20 h-20 mb-6"
        />

        <h2 className="text-2xl font-medium mb-6">FIESTA</h2>
        <h3>17 de Febrero de 2024</h3>
        <h3>19:30 horas</h3>
        <h3>Hospedaje San Francisco</h3>
        {/* <h3>Carretera Madrid KM 30, Colmenar Viejo, Madrid.</h3> */}
        {/*  RGB 154 170 154 */}
        <a
          target="_blank"
          rel="noopener"
          href="https://maps.app.goo.gl/1HMF46FQdFY1fxDF9"  
        >
          <button
            className="mt-6 bg-[#BD8C39] text-white rounded-full py-2 w-72 
          hover:bg-white hover:text-[#BD8C39] hover:border-[#BD8C39] border-[1px] border-[#BD8C39]
          transition duration-300 ease-in-out transform
          "
          >
            LLEGAR A LA FIESTA
          </button>
        </a>
      </div>
    </div>
  );
};
