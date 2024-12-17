import React from 'react';

function Counter({ value, onIncrement, onDecrement, onReset }) {
  return (
    <div className="counter p-4 border rounded-md shadow-md bg-gray-100 text-center">
      <div className="value text-2xl mb-4">{value}</div>
      <button onClick={onIncrement} className="mb-2 bg-green-500 text-white p-2 rounded-md w-full">Increment</button>
      <button onClick={onDecrement} className="mb-2 bg-red-500 text-white p-2 rounded-md w-full">Decrement</button>
      <button onClick={onReset} className="mb-2 bg-blue-500 text-white p-2 rounded-md w-full">Reset</button>
    </div>
  );
}

export default Counter;
