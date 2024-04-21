import { useEffect, useState } from "react";

const CurrencyConvertor = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmmount] = useState(1);

  // currencies -> https://api.frankfurter.app/currencies
  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();

      setCurrencies(data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);
  console.log(currencies);

  const convertCurrency = () => {};

  // Conversion -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>
      <h2 className='mb-5 text-2xl font-semibold text-gray-700'>
        Currency Convertor
      </h2>
      <div>Dropdowns</div>
      <div className='mt-4 '>
        <label
          htmlFor='ammount'
          className='block text-sm font-medium text-gray-700'
        >
          Amount
        </label>
        <input
          value={amount}
          onChange={(e) => setAmmount(e.target.value)}
          type='number'
          className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1'
        />
      </div>
      <div className='flex justify-end mt-6'>
        <button
          onClick={convertCurrency}
          className='px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Convert
        </button>
      </div>
      <div className='mt-4 text-lg font-medium text-right text-green-600'>
        Converted Amount: 123
      </div>
    </div>
  );
};

export default CurrencyConvertor;
