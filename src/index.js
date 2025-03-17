import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './styles/tailwind.css';

import Navbar from './components/Navbar';

import Preview from './components/Preview';
import BitcoinPrice from './components/BitcoinPrice'
import BitcoinTable from './components/Update'
import HowItWorks from './components/Work';
import Rockie from './components/Rockie';
import CryptoTradePromo from './components/Download';
import CustomerReviews from './components/Customers';
import Earn from './components/EarnUp';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar /> 
  <Preview />
  <React.StrictMode>
    <BitcoinPrice />
    <BitcoinTable />
  </React.StrictMode>
  <HowItWorks />
  <Rockie />
  <CryptoTradePromo />
  <CustomerReviews />
  <Earn />
  <Footer />
  </>
);