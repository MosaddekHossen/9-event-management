import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="">
                <img className="w-full h-[100vh] absolute -top-[0px] image opacity-85 -z-10" alt="" />
            </div>
            <div className="text-center h-[90vh] flex justify-center items-center">
                <h1 className="lg:text-5xl text-3xl font-bold text-white">Educational and <br /> Training Events</h1>
            </div>
        </div>
    );
};

export default Banner;