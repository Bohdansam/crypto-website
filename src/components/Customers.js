function CustomerReviews() {
  return (
    <div className="bg-cryptoBG1 py-32 sm:px-6 lg:px-20">
      <div className="w-full h-full mx-auto flex flex-col md:flex-row sm:items-center sm:text-center justify-between">
        
        {/* Left Part - Main Text */}
        <div className="max-w-[550px] md:w-1/2 flex flex-col justify-center sm:items-center">
          <h2 className="text-6xl font-extrabold sm:text-4xl">
            Our Customers Love What We Do
          </h2>
          <p className="mt-6 text-2xl font-bold sm:text-xl">
            Transform Your Idea Into Reality With Finsweet
          </p>
          <p className="mt-6 text-xl text-cryptoGray sm:text-lg">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>

          {/* Review Indicators */}
          <div className="flex items-center mt-8 space-x-2">
            <div className="w-4 h-4 bg-cryptoGray2 rounded-full sm:w-3 sm:h-3"></div>
            <div className="w-4 h-4 bg-cryptoGray2 rounded-full sm:w-3 sm:h-3"></div>
            <div className="w-4 h-4 bg-cryptoGray2 rounded-full sm:w-3 sm:h-3"></div>
          </div>

          {/* Customer Reviews Count */}
          <p className="mt-4 text-blue-500 font-bold text-lg sm:text-base">30+ Customer Reviews</p>
        </div>

        {/* Right Part - Review Box with Blue Line */}
        <div className="relative max-w-[500px] md:w-1/2 bg-cryptoGray2 p-6 sm:p-4 rounded-lg flex items-start sm:mt-8">
          {/* Blue Line */}
          <div className="w-3 bg-blue-500 h-full absolute left-0 top-0 rounded-l-lg sm:w-2"></div>

          <div className="pl-4 sm:pl-2">
            <span className="text-blue-500 text-4xl sm:text-2xl">“</span>
            <blockquote className="text-lg mt-4 sm:text-base">
              “Great course I really enjoyed it and the course was way easy to learn with very good explanations of the code, I could easily understand and develop applications with the knowledge gathered during the course.”
            </blockquote>

            {/* Reviewer Info */}
            <div className="flex items-center mt-6 sm:mt-4">
              <div className="w-10 h-10 bg-cryptoGray3 rounded-full sm:w-8 sm:h-8"></div>
              <div className="ml-3">
                <p className="text-white font-semibold sm:text-sm">Johnny Andro</p>
                <p className="text-cryptoGray text-sm sm:text-xs">Director, Company</p>
              </div>
            </div>

            {/* Logo */}
            <div className="absolute bottom-4 right-4 sm:bottom-2 sm:right-2">
              <img src="https://i.imgur.com/knYPMy3.png" alt="logipsum" className="h-6 sm:h-4" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CustomerReviews;
