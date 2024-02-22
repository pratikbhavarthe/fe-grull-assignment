import {  } from "";

const About = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col items-start justify-center gap-20 px-10 xl:px-0 py-10" id="about">
            <section className="w-full flex items-center justify-center">
            <h1 className="w-full text-center md:max-w-2xl header-text ">
            Aura, an embodiment of artistic devotion and a promise of superior quality in every light.
            </h1>
            </section>
            <div className="w-full h-full flex flex-col items-center justify-center gap-0 lg:gap-2">
            <section className="w-full h-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-5 lg:gap-10">
            <div className="h-[480px] flex flex-col items-start justify-start lg:justify-between gap-10 p-5 lg:p-10">
            <section className=" max-w-md flex flex-col items-start justify-start gap-5">
                <h1 className="font-clash font-normal text-xl md:text-2xl text-Primary">
                From its humble beginnings in a small shop in India, Aura has grown into a global brand, reaching customers around the world.
                </h1>
                <p className="para">

                </p>
                <p className="para">

                </p>
            </section>
            <section className="flex items-start justify-start">
                <button className="text-black text-base font-helvetica font-normal bg-light-slate">
                    Connect with us!
                </button>
            </section>
            </div>
            <section className="w-full h-full sm:w-[600px] sm:h-[400px] lg:w-[710px] lg:h-[480px] ">
                <img src={example1} alt="" className="w-full h-full object-cover" />
            </section>
            </section>

            <section className="w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 lg:gap-10">
                <section className="w-full h-full sm:w-[600px] sm:h-[400px] lg:w-[710px] lg:h-[480px]">
                    <img src={example2} alt="" className="w-full h-full object-cover"/>
                </section>
                <div className="h-[480px] flex flex-col items-start justify-start lg:justify-between gap-10 p-5 lg:p-10">
                    <section className=" max-w-md flex flex-col items-start justify-start gap-5">
                        <h1 className="font-helvetica font-normal text-xl md:text-2xl text-black">
                        Our service goes beyond being merely personal; it is exceptionally and intricately tailored to each individual.
                        </h1>
                        <p className="font-helvetica font-normal text-sm md:text-base text-light-slate-100">
                            Handmade and lovingly crafted lighting and decorative pieces are our forte. Embracing a touch of traditional Indian lights, we are dedicated to showcasing our passion for exquisite lamp designs in the vibrant world of home decor.
                        </p>
                    </section>
                    <section className="flex items-start justify-start">
                        <button className="text-black text-base font-helvetica font-mono bg-light-slate">
                            Connect with us!
                        </button>
                    </section>
                </div>
            </section>
            </div>
            </div>
        </>
    );
};

export default About;