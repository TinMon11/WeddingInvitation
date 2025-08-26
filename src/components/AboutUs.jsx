import image_1 from "../assets/image_1.png";
import image_3 from "../assets/image_3.png";
import image_4 from "../assets/image_4.png";
import image_5 from "../assets/image_5.png";

export const AboutUs = () => {
  return (
    <div className="md:pt-0 h-[calc(100vh-32px)]xl:pt-0 flex flex-col text-center justify-center pb-2">
      <h1 className="text-3xl mt-6 mb-8 font-medium">NOSOTROS...</h1>
      <div className="px-4 md:px-32 grid grid-cols-2 gap-1 xl:grid-cols-4 justify-items-center">
        <img
          src={image_1}
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72  rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        {/* <img
          src={image_2}
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        /> */}
        <img
          src={image_3}
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72  rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src={image_4}
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72  rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src={image_5}
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        {/* <img
          src={image_6}
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        /> */}
        {/* <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/7.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/8.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        /> */}
      </div>
      {/* <div
      className="m-auto w-10/12"
      >
        <img
          src={image_1}
          className="hover:scale-105 transform transition-all duration-300 rounded-xl object-cover"
        />
      </div> */}
    </div>
  );
};
