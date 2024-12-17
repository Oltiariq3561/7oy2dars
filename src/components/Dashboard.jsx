import React, { useState } from 'react';
import Counter from './counter';

function Dashboard() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const handleIncrement = (counter, setCounter) => {
    setCounter(counter + 1);
  };

  const handleDecrement = (counter, setCounter) => {
    setCounter(counter - 1);
  };

  const handleReset = (setCounter) => {
    setCounter(0);
  };

  const total = counter1 + counter2 + counter3;

  return (
    <div className="dashboard p-8 bg-gray-200">
      <h1 className="text-3xl font-bold text-center mb-8">Counter</h1>
      <div className="counters grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Counter
          value={counter1} 
          onIncrement={() => handleIncrement(counter1, setCounter1)} 
          onDecrement={() => handleDecrement(counter1, setCounter1)} 
          onReset={() => handleReset(setCounter1)} 
        />
        <Counter 
          value={counter2} 
          onIncrement={() => handleIncrement(counter2, setCounter2)} 
          onDecrement={() => handleDecrement(counter2, setCounter2)} 
          onReset={() => handleReset(setCounter2)} 
        />
        <Counter 
          value={counter3} 
          onIncrement={() => handleIncrement(counter3, setCounter3)} 
          onDecrement={() => handleDecrement(counter3, setCounter3)} 
          onReset={() => handleReset(setCounter3)} 
        />
      </div>
      <div className="total text-center text-2xl">
        <p><strong>Umumiy</strong> {total}</p>
      </div>
    </div>
  );
}

export default Dashboard;
