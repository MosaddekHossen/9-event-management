
const Slider = () => {
    return (
        <div className="max-w-7xl mx-auto lg:pt-10 pt-0 text-center">
            <h2 className="lg:text-5xl text-3xl font-bold py-10">BRAND NEW</h2>
            <div className="carousel w-full h-[60vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/PgrQH8T/Corpus-Christi-College-New-Court-Cambridge-UK-Diliff.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0nLcXrY/Kampustalo-joen-toiselta-puolelta-40468620090.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6XM87Hr/1280px-Morgan-Hall-of-Williams-College-in-the-fall-27-October-2010.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/PgrQH8T/Corpus-Christi-College-New-Court-Cambridge-UK-Diliff.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;