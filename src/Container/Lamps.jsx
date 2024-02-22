import { useNavigate } from "react-router-dom";
import { ProductCard } from "../components";


const Lamps = () => {
    const navigate = useNavigate();

    const handleScroll = () => {
        window.scrollTo(0, 0);
        navigate("/products");
    };

    return (
        <>
            <div className="content-wrapper flex flex-col items-start justify-start">
                <section className="flex items-start justify-start">
                    <h1 className="header-text">
                        New Lamps
                    </h1>
                </section>

                <section className="w-full h-full flex flex-wrap items-center justify-center lg:justify-start xl:justify-between gap-10 xl:gap-0">
                    {lamps.map((lamp) => (
                        <ProductCard key={lamp.id} lamp={lamp}/>
                    ))}
                </section>
                <div onClick={handleScroll} className="w-full flex items-center justify-center">
                    <button className="bg-light-slate text-black font-helvetica font-normal text-base px-6 py-3 outline-none border-none ">
                        Explore Series
                    </button>
                </div>
            </div>
        </>
    )
}

export default Lamps;