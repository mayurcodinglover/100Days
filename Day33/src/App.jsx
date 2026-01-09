import { useState, useEffect } from 'react';
import { Wallet, TrendingUp, TrendingDown, Plus, Trash2, X } from 'lucide-react';

function App() {
  const [data, setData] = useState({
    title: "",
    amount: "",
    type: ""
  });
  const [transaction, setTransaction] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const handleClick = (value) => {
    setData((d) => ({ ...d, "type": value }));
  };

  const addTransaction = () => {
    if (data.title && data.amount && data.type) {
      setTransaction((t) => ([...t, { ...data, id: Date.now() }]));
      setData({ title: "", amount: "", type: "" });
    }
  };

  const deleteTransaction = (id) => {
    setTransaction((t) => t.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setTransaction([]);
  };

  useEffect(() => {
    const income = transaction.filter((t) => (t.type === "income")).reduce((sum, t) => sum + Number(t.amount), 0);
    const expense = transaction.filter((t) => (t.type === "expense")).reduce((sum, t) => sum + Number(t.amount), 0);
    setIncome(income);
    setExpense(expense);
    setBalance(income - expense);
  }, [transaction]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Wallet className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Budget Planner
            </h1>
          </div>
          <p className="text-gray-600">Track your income and expenses effortlessly</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Total Balance */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-2">
              <p className="text-indigo-100 text-sm font-medium">Total Balance</p>
              <Wallet className="w-5 h-5 text-indigo-100" />
            </div>
            <p className="text-3xl font-bold">₹{balance.toLocaleString()}</p>
          </div>

          {/* Income */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Income</p>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-green-600">₹{income.toLocaleString()}</p>
          </div>

          {/* Expenses */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100 transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Expenses</p>
              <TrendingDown className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-red-600">₹{expense.toLocaleString()}</p>
          </div>
        </div>

        {/* Add Transaction Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Transaction</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Enter transaction title"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                name="amount"
                value={data.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <div className="flex gap-3">
                <button
                  onClick={() => handleClick("income")}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    data.type === "income"
                      ? "bg-green-500 text-white shadow-lg shadow-green-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Income
                </button>
                <button
                  onClick={() => handleClick("expense")}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    data.type === "expense"
                      ? "bg-red-500 text-white shadow-lg shadow-red-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <TrendingDown className="w-4 h-4 inline mr-2" />
                  Expense
                </button>
              </div>
            </div>

            <button
              onClick={addTransaction}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="w-5 h-5 inline mr-2" />
              Add Transaction
            </button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
            {transaction.length > 0 && (
              <button
                onClick={clearAll}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          {transaction.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">No transactions yet</p>
              <p className="text-gray-400 text-sm mt-1">Add your first transaction to get started</p>
            </div>
          ) : (
            <div className="space-y-3">
              {transaction.map((t) => (
                <div
                  key={t.id}
                  className={`flex items-center justify-between p-4 rounded-xl border-l-4 transition-all hover:shadow-md ${
                    t.type === "income"
                      ? "bg-green-50 border-green-500"
                      : "bg-red-50 border-red-500"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        t.type === "income" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {t.type === "income" ? (
                        <TrendingUp className="w-5 h-5 text-white" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t.title}</p>
                      <p className="text-sm text-gray-500 capitalize">{t.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p
                      className={`text-xl font-bold ${
                        t.type === "income" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {t.type === "income" ? "+" : "-"}₹{Number(t.amount).toLocaleString()}
                    </p>
                    <button
                      onClick={() => deleteTransaction(t.id)}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors group"
                    >
                      <X className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;