function Rockie() {
    return (
        <div className="bg-cryptoBG1 py-16 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
            {/* Left Part - Image Section */}
            <div className="max-w-[800px] text-center md:text-left max-w-lg md:m-20">
                <img 
                    src="https://i.imgur.com/AqPrLL4.png" 
                    alt="Crypto Exchange" 
                    className="w-full h-auto" 
                />
            </div>

            {/* Right Part - Text Section */}
            <div className="max-w-[650px] w-full flex flex-col mt-8 md:mt-0 md:ml-12"> 
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"> 
                    What Is Rockie
                </h1>
                <p className="text-lg md:text-xl text-cryptoGray mb-8"> 
                    Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
                </p>

                <div className="max-w-[600px] flex flex-col md:flex-row justify-between items-center pt-8">
                    <img src="https://i.imgur.com/PqJwwFl.png" className="w-5 h-5 md:w-6 md:h-6" alt="icon" />
                    <h1 className="text-2xl md:text-3xl font-bold mt-4 md:mt-0 md:ml-4">View real-time cryptocurrency prices</h1>
                </div>
                <p className="text-lg md:text-xl text-cryptoGray pt-4 mb-8"> 
                    Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
                </p>

                <div className="max-w-[590px] flex flex-col md:flex-row justify-between items-center pt-8">
                    <img src="https://i.imgur.com/PqJwwFl.png" className="w-5 h-5 md:w-6 md:h-6" alt="icon" />
                    <h1 className="text-2xl md:text-3xl font-bold mt-4 md:mt-0 md:ml-4">Buy and sell BTC, ETH, XRP, OKB, Etc...</h1>
                </div>
                <p className="text-lg md:text-xl text-cryptoGray pt-4 mb-8"> 
                    Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
                </p>

                {/*Button*/}
                <div className="flex justify-center mt-8">
                <button className="text-white py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-800 transition duration-300 mb-6">
                    Explore More
                </button>
                </div>
            </div>
        </div>
    );
}

export default Rockie;