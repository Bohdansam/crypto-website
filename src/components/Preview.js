import React from 'react';

function Preview() {
    return (
        <div className="bg-cryptoBG2 py-16 px-8 flex flex-col md:flex-row items-center justify-between">
            {/* Left Part - Text Section */}
            <div className="text-center m-4 md:m-20 md:text-left max-w-lg">
                <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">
                    Buy & Sell Digital Assets In The Rocket
                </h1>
                <p className="text-base md:text-lg text-gray-300 mb-6">
                    Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
                </p>
                <button className="text-white py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-800 transition duration-300 mb-6">
                    Get started now
                </button>

                {/* Partners Section */}
                <h2 className="text-3xl font-semibold text-white mt-10 mb-5">
                    Our Partners
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-md mx-auto gap-10">
                    <img 
                        src="https://i.imgur.com/9xf6Ybl.png" 
                        alt="Partner 1" 
                        className="w-auto h-auto max-w-[130px] max-h-[28px] md:max-w-[150px] md:max-h-[40px]"
                    />
                    <img 
                        src="https://i.imgur.com/awKipNW.png" 
                        alt="Partner 2" 
                        className="w-auto h-auto max-w-[130px] max-h-[28px] md:max-w-[150px] md:max-h-[40px]"
                    />
                    <img 
                        src="https://i.imgur.com/2YVFS0H.png" 
                        alt="Partner 3" 
                        className="w-auto h-auto max-w-[130px] max-h-[28px] md:max-w-[150px] md:max-h-[40px]"
                    />
                    <img 
                        src="https://i.imgur.com/dO72RFL.png" 
                        alt="Partner 4" 
                        className="w-auto h-auto max-w-[130px] max-h-[28px] md:max-w-[150px] md:max-h-[40px]"
                    />
                </div>
            </div>

            {/* Right Part - Image Section */}
            <div className="max-w-[570px] mt-8 mr-4 md:mr-20 md:mt-0 flex justify-center w-full">
                <img 
                    src="https://i.imgur.com/IuRj7Ca.png" 
                    alt="Crypto Exchange" 
                    className="w-full max-w-xs md:max-w-lg"
                />
            </div>
        </div>
    );
}

export default Preview