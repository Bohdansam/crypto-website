import React, { useState, useEffect } from 'react';
import AnimatedDiv from '../AnimatedDiv/AnimatedDiv';

function PriceCard({ cryptocurrency, symbol, iconUrl }) {
  const [price, setPrice] = useState(null);
  const [previousPrice, setPreviousPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptocurrency}&vs_currencies=usd`);
        const data = await response.json();
        const currentPrice = data[cryptocurrency].usd;

        if (previousPrice !== null) {
          setPrice(currentPrice);
          setPreviousPrice(currentPrice);
        } else {
          setPrice(currentPrice);
          setPreviousPrice(currentPrice);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching the data', error);
        setLoading(false);
      }
    };

    fetchPrice();
  }, [previousPrice, cryptocurrency]);

  if (loading) {
    return <div className="text-center text-xl">loading...</div>;
  }

  const priceChange = price - previousPrice;
  const percentageChange = ((priceChange / previousPrice) * 100).toFixed(2);
  const isPriceIncreasing = price > previousPrice;

  return (
    <AnimatedDiv>
    <div className="max-w-sm bg-cryptoBG1 hover:bg-cryptoBG2 p-4 rounded-lg shadow-lg flex items-center space-x-4 min-h-[200px]">
      <img src={iconUrl} alt={`${cryptocurrency} Icon`} className="w-8 h-8" />
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">{cryptocurrency.toUpperCase()} {symbol}</h2>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Price: ${price}</p>
          <div className={`text-sm font-semibold ${isPriceIncreasing ? 'text-cryptoGreen' : 'text-cryptoRed'}`}>
            {isPriceIncreasing ? `+${percentageChange}%` : `-${percentageChange}%`}
          </div>
        </div>
      </div>
</div>
</AnimatedDiv>
  );
}

function CryptoPrices() {
  return (
    <AnimatedDiv>
    <div className="cryptoBG1 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <PriceCard cryptocurrency="bitcoin" symbol="BTC/USD" iconUrl="https://i.imgur.com/ZJLt6OI.png" />
        <PriceCard cryptocurrency="ethereum" symbol="ETH/USD" iconUrl="https://i.imgur.com/y91tJ3y.png" />
        <PriceCard cryptocurrency="tether" symbol="USDT/USD" iconUrl="https://i.imgur.com/bO8aXG4.png" />
        <PriceCard cryptocurrency="binancecoin" symbol="BNB/USD" iconUrl="https://i.imgur.com/5t49lVF.png" />
      </div>
    </div>
    </AnimatedDiv>
  );
}

export default CryptoPrices;
