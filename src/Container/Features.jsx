import { MdDeliveryDining } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import { FaMoneyCheck } from "react-icons/fa6";
import { GiThreeLeaves } from "react-icons/gi";
import { FeaturesCard } from "../components";

const Features = () => {
    return (
        <>
            <div className="content-wrapper flex flex-col items-center justify-center">
                <section className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="header-text">
                        Redefining spaces with unique lamps and radiant decorative lighting that truly sets us apart.
                    </h1>
                </section>
                <section className="w-full h-full flex flex-wrap items-center justify-center lg:justify-between gap-16 lg:gap-10">
                    <FeaturesCard
                        icon={MdDeliveryDining} title="Arrives the next day." desc="Place your order by 1pm and receive it the following day as our standard delivery."/>

                        <FeaturesCard
                        icon={HiCheckCircle} title="Created by skillfull hands." desc="Handcrafted lamps created with genuine passion and craftsmanship."/>

                        <FeaturesCard
                        icon={FaMoneyCheck} title="Affordable Prices." desc="Nowhere else will you find better prices for the quality of our materials."/>

                        <FeaturesCard
                        icon={GiThreeLeaves} title="Upcycled Packaging." desc="We employ 100% recycled packaging to maintain a sustainable footprint."/>
                </section>
            </div>
        </>
    );
};

export default Features;