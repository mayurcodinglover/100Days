import { useState, useEffect } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState(10);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [currencies, setCurrencies] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch available currencies and exchange rates
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        // Using frankfurter.app API (free, no API key needed)
        const response = await fetch('https://api.frankfurter.app/currencies');
        const data = await response.json();
        
        // Convert object to array for dropdown
        const currencyList = Object.keys(data).map(code => ({
          code,
          name: data[code]
        }));
        
        setCurrencies(currencyList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching currencies:', error);
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  // Fetch exchange rates when fromCurrency changes
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?from=${fromCurrency}`
        );
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    if (fromCurrency) {
      fetchExchangeRates();
    }
  }, [fromCurrency]);

  // Convert currency whenever amount, currencies, or rates change
  useEffect(() => {
    if (exchangeRates[toCurrency]) {
      const result = (amount * exchangeRates[toCurrency]).toFixed(2);
      setConvertedAmount(result);
    }
  }, [amount, toCurrency, exchangeRates]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Currency Converter
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fast & Accurate Exchange Rates
        </p>

        {/* Amount Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg"
            min="0"
          />
        </div>

        {/* From Currency */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg appearance-none bg-white cursor-pointer"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center my-4">
          <button
            onClick={handleSwapCurrencies}
            className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        {/* To Currency */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg appearance-none bg-white cursor-pointer"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>

        {/* Convert Button */}
        <button
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 mb-6"
        >
          Convert
        </button>

        {/* Result */}
        <div className="bg-purple-50 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-600 mb-1">Converted Amount:</p>
          <p className="text-2xl font-bold text-gray-800">
            {amount} {fromCurrency}
          </p>
          <p className="text-4xl font-bold text-purple-600 mt-2">
            {convertedAmount} {toCurrency}
          </p>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          Powered by Frankfurter API
        </p>
      </div>
    </div>
  );
}

export default CurrencyConverter;