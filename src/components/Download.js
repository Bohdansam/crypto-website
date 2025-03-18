import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";

function Rockie() {
  return (
      <AnimatedDiv>
      <div className="bg-cryptoBG2 pt-20 md:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Part - Text Section */}
          <div className="max-w-[650px] w-full flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 md:ml-12"> 
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"> 
              Free your money & Invest with confident
              </h1>
              <p className="text-lg md:text-xl text-cryptoGray mb-8"> 
              With Cryptor Trade, you can be sure your trading skills are matched
              </p>

              <div className="max-w-[490px] flex flex-col md:flex-row justify-between items-center pt-8">
                  <img src="https://i.imgur.com/PqJwwFl.png" className="w-5 h-5 md:w-6 md:h-6" alt="icon" />
                  <h1 className="text-2xl md:text-3xl font-bold mt-4 md:mt-0 md:ml-4">Buy, Sell, And Trade On The Go</h1>
              </div>
              <p className="text-lg md:text-xl text-cryptoGray pt-4 mb-8"> 
                  Manage your holdings from your mobile device
              </p>

              <div className="max-w-[450px] flex flex-col md:flex-row justify-between items-center pt-8">
                  <img src="https://i.imgur.com/PqJwwFl.png" className="w-5 h-5 md:w-6 md:h-6" alt="icon" />
                  <h1 className="text-2xl md:text-3xl font-bold mt-4 md:mt-0 md:ml-4">Take Control Of Your Wealth</h1>
              </div>
              <p className="text-lg md:text-xl text-cryptoGray pt-4 mb-8"> 
              Rest assured you (and only you) have access to your funds
              </p>
          </div>

          {/* Right Part - Image Section */}
          <div className="w-full text-center md:text-left md:max-w-lg self-end flex justify-center md:justify-start">
              <img 
                  src="https://i.imgur.com/KJBHiB2.png" 
                  alt="Crypto Exchange" 
                  className="w-full h-auto max-w-[400px] md:max-w-none" 
              />
          </div>
      </div>
      </AnimatedDiv>
  );
}

export default Rockie;;