import AnimatedDiv from '../AnimatedDiv/AnimatedDiv';

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CryptoTable() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,tether,solana,ripple,cardano,avalanche-2'
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl text-red-500">Error: {error}</div>;
  }

  if (!cryptoData.length) {
    return <div className="text-center text-2xl text-red-500">Error loading data</div>;
  }

  const getChartData = (priceChange7d) => {
    const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
    const data = Array.from({ length: 7 }, (_, i) => (priceChange7d / 7) * (i + 1));

    return {
      labels,
      datasets: [
        {
          label: 'Price Change',
          data,
          borderColor: priceChange7d >= 0 ? 'green' : 'red',
          backgroundColor: priceChange7d >= 0 ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)',
          borderWidth: 2,
          pointRadius: 1,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <AnimatedDiv>
    <div className="pt-10 px-4 sm:pt-20 sm:pl-40 overflow-x-auto">
      <table className="min-w-full table-auto text-lg sm:text-xl border-collapse">
        <thead>
          <tr className="bg-cryptoBG1">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Last Price</th>
            <th className="px-4 py-2 text-left">24%</th>
            <th className="px-4 py-2 text-left">Last 7 Days</th>
            <th className="px-8 py-2 text-left">Trade</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => {
            const { id, current_price, price_change_percentage_24h, price_change_percentage_7d, image, symbol } = crypto;
            const priceChange24h = price_change_percentage_24h ?? 0;
            const priceChange7d = price_change_percentage_7d ?? 0;

            return (
              <tr key={id} className="hover:bg-cryptoBG2">
                <td className="px-4 h-[90px]">
                  <div className="flex items-center">
                    <img src={image} alt={crypto.name} className="w-6 h-6 mr-2" />
                    <span>
                      {crypto.name} | {symbol.toUpperCase()}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2">${current_price}</td>
                <td
                  className={`px-4 py-2 ${priceChange24h >= 0 ? 'text-cryptoGreen' : 'text-cryptoRed'}`}
                >
                  {priceChange24h.toFixed(2)}%
                </td>
                <td className="px-4 py-2">
                  <div style={{ width: '100px', height: '50px' }}>
                    <Line data={getChartData(priceChange7d)} options={chartOptions} />
                  </div>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Trade
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </AnimatedDiv>
  );
}

export default function App() {
  return (
    <div>
      <CryptoTable />
    </div>
  );
}