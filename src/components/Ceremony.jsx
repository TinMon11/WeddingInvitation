import React from "react";

export const Ceremony = () => {
  return (
    <div className="pt-24 bg-white flex flex-row gap-12 flex-wrap justify-evenly min-h-[calc(100vh-96px)] w-full">
      <div className="flex flex-col w-96 text-center items-center">
        {/* Icono con la imagen icon-ceremony de la carpeta assets */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1683/1683840.png"
          alt="icon-ceremony"
          className="w-20 h-20 mb-6"
        />
        <h2 className="text-2xl font-medium mb-6">CEREMONIA</h2>
        <h3>26 de Agosto de 2023</h3>
        <h3>17:00 horas</h3>
        <h3>Basílica Pontificia de San Miguel</h3>
        <h3>C. de San Justo, 4, Madrid.</h3>
        {/*  Link But Opening a New Tab */}
        <a
          target="_blank"
          rel="noopener"
          href="https://goo.gl/maps/FQECR6YX2K9Vbo8Q7"
        >
          <button
            className="mt-6 bg-[#9aaa9a] text-white rounded-full py-2 w-72 
          hover:bg-white hover:text-[#9aaa9a] hover:border-[#9aaa9a] border-[1px] border-[#9aaa9a]
          transition duration-300 ease-in-out transform
          "
          >
            LLEGAR A LA CEREMONIA
          </button>
        </a>
      </div>
      <div className="flex flex-col w-96 text-center items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1274/1274415.png"
          alt="icon-ceremony"
          className="w-20 h-20 mb-6"
        />

        <h2 className="text-2xl font-medium mb-6">FIESTA</h2>
        <h3>26 de Agosto de 2023</h3>
        <h3>19:30 horas</h3>
        <h3>Finca Las Tenadas</h3>
        <h3>Carretera Madrid KM 30, Colmenar Viejo, Madrid.</h3>
        {/*  RGB 154 170 154 */}
        <a
          target="_blank"
          rel="noopener"
          href="https://goo.gl/maps/uqAFRo3oACzpVPNq7"
        >
          <button
            className="mt-6 bg-[#9aaa9a] text-white rounded-full py-2 w-72 
          hover:bg-white hover:text-[#9aaa9a] hover:border-[#9aaa9a] border-[1px] border-[#9aaa9a]
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
