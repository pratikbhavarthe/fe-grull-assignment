const FeaturesCard = ({ icon:Icon, title, desc }) => {
    return (
        <>
            <div className="w-[270px] h-full flex flex-col items-start justify-start gap-1">
                <Icon className="w-5 h-5 text-white"/>
                <h1 className="font-helvetica font-mono text-lg text-white">
                    {title}
                </h1>
                <p className="para">{desc}</p>
            </div>
        </>
    );
};

export default FeaturesCard;