import { useNavigate } from "react-router-dom";
import { ProductCard } from "../components";
import { popular } from "../constants";

const Trending = () => {
    const navigate = useNavigate();

    const handleScrollTop = () => {
      window.scrollTo(0, 0);
      navigate("/products");
    };
  
    return (
      <>
        <div className="content-wrapper flex flex-col items-start justify-start">
          <section className="flex items-start justify-start">
            <h1 className="header-text">
              Our Trending Products
            </h1>
          </section>
          <section className="w-full h-full flex flex-wrap items-center justify-center lg:justify-start xl:justify-between gap-10 xl:gap-0">
            {popular.map((lamps) => (
              <ProductCard key={lamps.id} lamp={lamps} />
            ))}
          </section>
          <div
            onClick={handleScrollTop}
            className="w-full flex items-center justify-center"
          >
            <button className="bg-light-slate text-black font-helvetica font-normal text-base px-6 py-3 outline-none border-none ">
              Explore Series
            </button>
          </div>
        </div>
      </>
    );
  };

export default Trending;