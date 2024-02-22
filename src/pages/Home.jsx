import { About, Lamps, Trending, Hero, Polpular, Signin } from "../container";

const Home = () => {
    return (
        <>
            <div className="w-full h-full">
            <Hero />
            <Features />
            <Lamps />
            <Trending />
            <Signin />
            <About />
            </div>
        </>
    );
};

export default Home;
