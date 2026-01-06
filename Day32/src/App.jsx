import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: ""
  });
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const handleExpense = () => {
    if (data.title && data.amount && data.date) {
      setExpenses((e) => ([...e, data]));
      setTotalExpense((prev) => (prev + Number(data.amount)));
      setData({ title: "", amount: "", date: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Expense Tracker</h1>
          <p className="text-gray-600">Keep track of your Spending</p>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expense Title
              </label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Enter title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={data.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>
          
          <button
            onClick={handleExpense}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Add Expense
          </button>
        </div>

        {/* Expenses List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">All Expenses</h2>
          <p className="text-gray-600 mb-6">Recent Expenses</p>
          
          {expenses.length === 0 ? (
            <p className="text-center text-gray-400 py-8">No expenses added yet</p>
          ) : (
            <div className="space-y-3 mb-6">
              {expenses.map((expense, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 flex justify-between items-center hover:shadow-md transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{expense.title}</h3>
                    <p className="text-sm text-gray-600">{expense.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-purple-600">₹{expense.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Total */}
          <div className="border-t-2 border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">Total Expenses:</span>
              <span className="text-2xl font-bold text-purple-600">₹{totalExpense}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;