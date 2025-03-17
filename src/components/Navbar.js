import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="container mx-auto flex justify-between items-center py-6 px-1 relative">
            {/* Logo and Text Section */}
            <div className="flex items-center text-2xl text-right font-semibold leading-none tracking-widest ml-8 md:ml-0">
                <a href="/homepage" aria-label="Homepage" className="flex items-center">
                    <img src="https://i.imgur.com/LsdKPhT.png" alt="Rocket Logo" className="h-8 mr-2" />
                    Rocket
                </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center" role="navigation">
                <button className="hover:text-cryptoGray">Homepage</button>
                <button className="hover:text-cryptoGray">Buy Crypto</button>
                <button className="hover:text-cryptoGray">Exchange</button>
                <button className="hover:text-cryptoGray">Orders & Trades</button>
                <button className="hover:text-cryptoGray">Wallet</button>
                <button className="hover:text-cryptoGray">
                    <img src="https://i.imgur.com/dm6xaKE.png" alt="Profile" className="h-6" />
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} bg-black bg-opacity-50 flex justify-center items-start md:hidden z-50`} role="dialog" aria-modal="true">
                <div className="bg-cryptoBG1 w-full h-full flex flex-col justify-start items-center p-8 relative">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none" aria-label="Close menu">
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col items-center pt-20 space-y-6">
                        {/* Apply smaller text size when menu is open and position text higher */}
                        <button className={`hover:text-cryptoGray transition-all duration-300 ${isOpen ? 'text-xl' : 'text-sm'}`}>Homepage</button>
                        <button className={`hover:text-cryptoGray transition-all duration-300 ${isOpen ? 'text-xl' : 'text-sm'}`}>Buy Crypto</button>
                        <button className={`hover:text-cryptoGray transition-all duration-300 ${isOpen ? 'text-xl' : 'text-sm'}`}>Exchange</button>
                        <button className={`hover:text-cryptoGray transition-all duration-300 ${isOpen ? 'text-xl' : 'text-sm'}`}>Orders & Trades</button>
                        <button className={`hover:text-cryptoGray transition-all duration-300 ${isOpen ? 'text-xl' : 'text-sm'}`}>Wallet</button>
                        <button className="hover:text-cryptoGray">
                            <img src="https://i.imgur.com/dm6xaKE.png" alt="Profile" className="h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
;
