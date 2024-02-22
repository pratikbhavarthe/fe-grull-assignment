import { BsBagCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Canvas } from "../utils";


const Success = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    window.scrollTo(0, 0);
    navigate("/products");
  };
  return (
    <>
      <div className="content-wrapper flex items-center justify-center py-20">
        <section className="w-auto h-auto bg-light-gray flex flex-col items-center justify-center gap-4">
          <Canvas />
          <BsBagCheckFill className="text-Primary w-10 h-10" />
          <h1 className="text-black text-4xl font-helvetica font-medium text-center">
            Thank you for your purchase.{" "}
          </h1>
          <p className="max-w-sm text-center text-light-gray-100 font-normal font-helvetica">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima
            nostrum porro dolore deserunt similique.
          </p>
          <button
            className="bg-Primary text-white font-helvetica font-normal px-6 py-3"
            onClick={goToProducts}
          >
            Continue Shopping
          </button>
        </section>
      </div>
    </>
  );
};

export default Success;