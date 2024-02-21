/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

const ProductCard = ({ lamp }) => {
    const navigate = useNavigate();

    const handleNextPage = () => {
        window.scrollTo(0,0);
        navigate(`/product/${lamp.id}`)
    }

    return (
        <>
            <motion.div whileHover={{scale: 1.05,}} className={`${lamp.icon1 ?'w-[603px]': ' w-[300px]'} h-[460px] bg-white flex flex-col items-start justify-start gap-2` }>
                <div onClick={handleNextPage}>
                    {lamp.icon1 ? (
                        <img src={lamp.icon1} alt="lamp image" className="w-full h-[375px] object-cover cursor-pointer"/>
                    ): (
                        <img src={lamp.icon} alt="lamp image" className="w-full h-[375px] object-cover cursor-pointer"/>
                    )}
                </div>
                <h3 className="font-helvetica font-mono text-xl text-purple-300">
                    {lamp.name}
                </h3>
                <p className="font-helvetica font-mono text-lg text-purple-300">
                    &#8377;{lamp.price}
                </p>
                </motion.div>
        </>
    );
};

export default ProductCard;