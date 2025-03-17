import React, { useState, useEffect } from 'react';

function CryptoTable({ cryptoId, name }) {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoId}`
        );
        if (!response.ok) {
          throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setCryptoData(data[0]);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, [cryptoId]);

  if (loading) {
    return <div className="text-center text-xl">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Ошибка: {error}</div>;
  }

  if (!cryptoData) {
    return <div className="text-center text-xl text-red-500">Ошибка загрузки данных</div>;
  }

  const lastPrice = cryptoData.current_price;
  const priceChange24h = cryptoData.price_change_percentage_24h ?? 0;
  const priceChange7d = cryptoData.price_change_percentage_7d ?? 0;

  return (
    <div className="p-8">
      <table className="min-w-full table-auto border-collapse border">
        <thead>
          <tr className="bg-cryptoBG1">
            <th className="px-4 py-2 border-b text-left">Name</th>
            <th className="px-4 py-2 border-b text-left">Last Price</th>
            <th className="px-4 py-2 border-b text-left">24%</th>
            <th className="px-4 py-2 border-b text-left">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="px-4 py-2 border-b">{name}</td>
            <td className="px-4 py-2 border-b">${lastPrice}</td>
            <td className={`px-4 py-2 border-b ${priceChange24h >= 0 ? 'text-cryptoGreen' : 'text-cryptoRed'}`}>
              {priceChange24h.toFixed(2)}%
            </td>
            <td className={`px-4 py-2 border-b ${priceChange7d >= 0 ? 'text-cryptoGreen' : 'text-cryptoRed'}`}>
              {priceChange7d.toFixed(2)}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <CryptoTable cryptoId="bitcoin" name="Bitcoin" />
      <CryptoTable cryptoId="ethereum" name="Ethereum" />
      <CryptoTable cryptoId="binancecoin" name="BNB" />
      <CryptoTable cryptoId="tether" name="Tether" />
      <CryptoTable cryptoId="solana" name="Solana" />
      <CryptoTable cryptoId="ripple" name="XRP" />
      <CryptoTable cryptoId="cardano" name="Cardano" />
      <CryptoTable cryptoId="avalanche-2" name="Avalanche" />
    </div>
  );
}
