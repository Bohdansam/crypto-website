import React from 'react';
import AnimatedDiv from '../AnimatedDiv/AnimatedDiv';

const Footer = () => {
  return (
    <AnimatedDiv>
    <footer className="bg-cryptoBG1 pt-12 text-gray-400 px-4 sm:px-0"> 
      {/* Добавлен класс px-4 для мобильных устройств и sm:px-0 для устройств с шириной экрана больше 640px */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Rocket</h2>
            <p className="text-sm">Free For All Of The World People</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-2 text-white">PRODUCTS</h3> 
            <ul>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Spot</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Inverse Perpetual</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">USDT Perpetual</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Exchange</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Launchpad</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Binance Pay</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-white">Buy Crypto</h3> 
            <ul>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Markets</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Trading Fee</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Affiliate Program</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Referral Program</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">API</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-white">Bypix Learn</h3> 
            <ul>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">User Feedback</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Submit A Request</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">API Documentation</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Trading Rules</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-white">About Bypix</h3> 
            <ul>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Authenticity Check</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Business Contacts</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </AnimatedDiv>
  );
};

export default Footer;