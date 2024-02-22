import { Banner } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <header className="w-full xl:w-[1260px] h-full mx-auto flex items-center justify-center px-7 xl:px-0 py-10">
        <section className="w-full h-[440px] bg-black flex flex-col items-start justify-between gap-10 p-10">
          <div className="flex flex-col items-start justify-start gap-10">
            <h1 className="w-full sm:max-w-lg font-helvetica font-normal text-3xl sm:text-4xl text-white">
              The brand of the future in lighting, featuring timeless designs.
            </h1>
            <Link
              to="/products"
              className="hidden md:block bg-white bg-opacity-20 font-helvetica font-normal text-light-gray px-5 py-2 hover:bg-opacity-25 transition-all duration-200 focus:bg-opacity-25 outline-none cursor-pointer"
            >
              Explore Series 
            </Link>
          </div>
          <div className="w-full sm:max-w-xl flex flex-col items-start justify-start gap-10">
            <p className="font-helvetica text-sm sm:text-base text-white">
              Aura, the Indian luxury decorative lighting brand, ushers in a new era in the lighting industry, offering a delightful range of decoratives, tasteful tones, and an elegant approach to showcasing.
            </p>
            <Link
              to="/products"
              className="flex md:hidden w-full items-center justify-center bg-white bg-opacity-20 font-helvetica font-normal text-light-gray px-5 py-2 hover:bg-opacity-25 transition-all duration-200 focus:bg-opacity-25 outline-none cursor-pointer"
            >
              Explore Series 
            </Link>
          </div>
        </section>
        <section className="w-[620px] h-[440px] hidden md:block">
          <img src={Banner} alt="" className="w-full h-full object-cover" />
        </section>
      </header>
    </>
  );
};

export default Hero;