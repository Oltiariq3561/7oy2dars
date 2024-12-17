import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('tasks'));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }, [data]);

  function handleClick(e) {
    e.preventDefault();
    if (name.length >= 5) {
      const user = {
        name,
      };
      setData([...data, user]);
      setName('');
    } else {
      alert('5 ta dan ko‘proq belgi yozing');
    }
  }

  function handleDeleteAll(e) {
    e.preventDefault();
    setData([]);
    localStorage.removeItem('tasks');
  }

  function handleDelete(index) {
    setData(data.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="container m-auto text-center border min-h-[600px] rounded-md w-[700px]">
        <h1 className="text-[25px] mb-8 font-semibold mt-5">TO DO List</h1>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-[300px] h-[50px] rounded-md"
            placeholder="Enter a task"
            type="text"
          />
          <button
            onClick={handleClick}
            className="border text-white text-[17px] bg-lime-700 w-[100px] h-[50px] rounded-md"
          >
            Add Task
          </button>
          <button
            onClick={handleDeleteAll}
            className="border text-[16px] mt-1 text-white bg-red-500 w-[100px] h-[50px] rounded-md"
          >
            Delete All 🗑
          </button>
        </form>
        {data.length > 0 &&
          data.map((v, i) => (
            <div
              key={i}
              className="bg-gray-50 ml-36 w-[400px] h-[60px] text-left rounded-md wrap flex mt-2 justify-between align-middle"
            >
              <div className="pt-4">{v.name}</div>
              <button
                onClick={() => handleDelete(i)}
                className="border text-[18px] mt-1 text-white bg-red-500 w-[100px] h-[50px] rounded-md"
              >
                Delete 🗑
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;


// 3-masala
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true)
//   useEffect(() => {
//     axios.
//     get('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         setUsers(response.data);  
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() =>{
//         setLoading(false)
//       })
//   }, []);

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-bold text-center mb-6">User List</h1>
//       {
//         loading && <p>loading ...</p>
//       }
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {users.length > 0 && users.map((v,i) => (
//           <div
//             key={i}
//             className="border p-4 rounded-lg shadow-md bg-white text-gray-700"
//           >
//             <h2 className="text-xl font-semibold">{v.name}</h2>
//             <p className="text-sm text-gray-500">{v.email}</p>
//             <p className="text-sm mt-2">
//               <strong>Company:</strong> {v.company.name}
//             </p>
//             <p className="text-sm">
//               <strong>Phone:</strong> {v.phone}
//             </p>
//            </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Users;


// 4-masala
// import React from 'react';
// import Dashboard from './components/Dashboard';
// function App() {
//   return (
//     <div className="app">
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

// 2-masala

// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [data, setData] = useState([]);

//   function handleClick(e) {
//     e.preventDefault();

//     const user = {
//       name,
//       email,
//       address,
//       id: Date.now(),
//     };

//     setData([...data, user]);

//     setName("");
//     setEmail("");
//     setAddress("");
//   }

//   return (
//     <>
//       <div className="container w-[586px] h-[554px] bg-white mt-20 rounded-[12px] m-auto">
//         <form className="w-[554px] pt-[16px] m-auto">
//           <h1 className="text-[16px] mb-[32px]">Edit address</h1>
//           <div className="flex justify-between">
//             <div>
//               <label className="text-[14px]">Name</label>
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-[269px] mt-2 h-[46px] rounded-[8px] border"
//                 placeholder="Name..."
//                 type="text"
//               />
//             </div>
//             <div>
//               <label className="text-[14px]">Email</label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-[269px] mt-2 mb-4 h-[46px] rounded-[8px] border"
//                 placeholder="Email..."
//                 type="email"
//               />
//             </div>
//           </div>
//           <div>
//             <label>Billing address</label>
//             <textarea
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Address"
//               className="resize-none rounded-[8px] border mt-[8px] w-[554px] h-[86px]"
//             />
//           </div>
//         </form>
//         <div className="flex w-[554px] m-auto justify-between">
//           <button
//             onClick={handleClick}
//             className="w-[269px] border h-[46px] rounded-[8px]"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleClick}
//             className="w-[269px] h-[46px] bg-[#a020f0] rounded-[8px]"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//       <div className="container w-[1200px] flex flex-wrap gap-[30px] m-auto justify-center">
//         {data.length > 0 &&
//           data.map((v) => (
//             <div
//               key={v.id}
//               className="wrapper w-[350px] mt-14 bg-cream px-6 py-4 rounded-md shadow-md bg-gray-800 border border-gray-200"
//             >
//               <h1 className=" text-[white] mb-2 text-lg font-medium">
//                 Name: <span className="font-normal">{v.name}</span>
//               </h1>
//               <h1 className=" text-[white] mb-2 text-lg font-medium">
//                 Email: <span className="font-normal">{v.email}</span>
//               </h1>
//               <h1 className=" text-[white] mb-2 text-lg font-medium">
//                 Address: <span className="font-normal">{v.address}</span>
//               </h1>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

// export default App;
