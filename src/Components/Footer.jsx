import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="w-full h-full bg-black">
                <div className="content-wrapper flex flex-col items-start justify-center">
                <section className="w-full h-full text-white flex flex-wrap-reverse md:flex-wrap items-start justify-between lg:justify-center gap-10 lg:gap-28">
                <ul className="flex flex-col items-start justify-start gap-3 font-helvetica font-normal text-sm">
                <h1 className="text-base"><strong>Online Shopping</strong></h1>
                <li>Trending Now </li>
                <li>Hot Picks</li>
                <li>Trending this week</li>
                <li>All Items</li>
                </ul>
                <ul className="flex flex-col items-start justify-start gap-3 font-helvetica font-normal text-sm">
                <h1 className="text-base"><strong>Aura Family</strong></h1>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Newsroom</li>
                <li>Aura for Business</li>
                <li>Terms and Conditions</li>
                </ul>
                <ul className="flex flex-col items-start justify-start gap-3 font-helvetica font-normal text-sm">
                <h1 className="text-base"><strong>Collections</strong></h1>
                <li>Lamps</li>
                <li>Decorative Lightning</li>
                <li>Integrated Lightning</li>
                <li>Smart Lightning</li>
                <li>LED Bulbs</li>
                <li>Outdoor Lighting</li>
                </ul>
                
                <div className="flex flex-col items-start justify-start gap-3">
                <h1 className="font-clash font-normal text-base ">
                    Subscribe to our newsletter
                </h1>
                <form className="font-helvetica flex items-center">
                    <input type="text" placeholder="your@email.com"
                    className="w-full sm:w-64 h-12 bg-white bg-opacity-20 placeholder:text-white text-white px-4 py-2 outline-none border-none"/>
                    <button className="w-28 h-12 bg-white text-Primary text-base px-4 py-2">Sign Up</button>
                </form>
                </div>
                </section>
                <section className="w-full h-full flex items-center justify-center md:justify-between flex-wrap border-t-2 border-t-[#408faa] pt-5 ">
                <h1 className="text-white text-sm font-helvetica font-normal">Copyright&copy;2024 Aura Lights</h1>
                <div className="hidden md:flex items-center justify-center gap-4 text-white">
                    <FaLinkedinIn className="w-5 h-5"/>
                    <FaInstagram className="w-5 h-5"/>
                    <FaTwitter className="w-5 h-5"/>
                </div>
                </section>
                    </div> 
            </footer>
        </>
    );
};

export default Footer;