import './App.css'
import { Calculator, DollarSign, TrendingUp, Timer, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {

  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [year, setYear] = useState('');
  const [intrest, setIntrest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [emi, setEmi] = useState(0);

  // Auto-calculate whenever amount, rate, or year changes
  useEffect(() => {
    const P = Number(amount);
    const annualRate = Number(rate);
    const R = annualRate / 12 / 100; // monthly rate
    const N = Number(year) * 12;

    if (P <= 0 || R <= 0 || N <= 0) {
      setEmi(0);
      setTotalPayment(0);
      setIntrest(0);
      return;
    }

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    const monthlyEmi = Math.round(EMI);
    const totalPay = Math.round(monthlyEmi * N);
    const interestPay = totalPay - P;

    setEmi(monthlyEmi);
    setTotalPayment(totalPay);
    setIntrest(interestPay);
  }, [amount, rate, year]);

  const handleReset = () => {
    setAmount('');
    setRate('');
    setYear('');
    setEmi(0);
    setTotalPayment(0);
    setIntrest(0);
  };

  const formatNumber = (num) => {
    return num.toLocaleString('en-IN');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Loan Calculator</h1>
          <p className="text-white/80 text-lg">Calculate your EMI in seconds</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Input Section */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Loan Details</h2>
              
              {/* Loan Amount */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Amount (₹)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <input 
                    type="number" 
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              {/* Interest Rate */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Interest Rate (% p.a.)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <input 
                    type="number" 
                    step="0.1"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Enter rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Tenure (years)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Timer className="w-5 h-5" />
                  </div>
                  <input 
                    type="number" 
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Enter years"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>

              {/* Reset Button */}
              <button 
                onClick={handleReset}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <RotateCcw className="w-5 h-5" />
                Reset Calculator
              </button>
            </div>

            {/* Right Side - Results Section */}
            <div className="p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
              <h2 className="text-2xl font-bold mb-6">EMI Breakdown</h2>

              {/* Monthly EMI - Highlighted */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                <p className="text-sm font-medium text-white/80 mb-2">Monthly EMI</p>
                <p className="text-5xl font-bold">₹{emi ? formatNumber(emi) : '0'}</p>
              </div>

              {/* Other Details */}
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-sm font-medium text-white/70 mb-1">Principal Amount</p>
                  <p className="text-2xl font-bold">₹{amount ? formatNumber(Number(amount)) : '0'}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-sm font-medium text-white/70 mb-1">Total Interest</p>
                  <p className="text-2xl font-bold">₹{intrest ? formatNumber(intrest) : '0'}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-sm font-medium text-white/70 mb-1">Total Payment</p>
                  <p className="text-2xl font-bold">₹{totalPayment ? formatNumber(totalPayment) : '0'}</p>
                </div>
              </div>

              {/* Info Text */}
              <p className="text-xs text-white/60 mt-6 text-center">
                All calculations are approximate and for informational purposes only
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/70 mt-6 text-sm">
          Built with ❤️ for easy loan calculations
        </p>
      </div>
    </div>
  )
}

export default App