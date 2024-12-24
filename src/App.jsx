// import React, { useState, useEffect } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem("tasks"));
//     if (savedData) {
//       setData(savedData);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(data));
//   }, [data]);

//   const handleClick = (e) => {
//     e.preventDefault();
//     if (name.length >= 5) {
//       const newTask = {
//         name,
//         completed: false,
//       };
//       setData([...data, newTask]);
//       setName("");
//     } else {
//       alert("5 ta dan ko‘proq belgi yozing");
//     }
//   };

//   const handleDeleteAll = (e) => {
//     e.preventDefault();
//     setData([]);
//     localStorage.removeItem("tasks");
//   };

//   const handleDelete = (index) => {
//     setData(data.filter((_, i) => i !== index));
//   };

//   const toggleCompleted = (index) => {
//     const updatedData = data.map((task, i) =>
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setData(updatedData);
//   };

//   const completedTasks = data.filter((task) => task.completed).length;
//   const progress = data.length ? (completedTasks / data.length) * 100 : 0;

//   return (
//     <div>
//       <div className="container m-auto text-center border min-h-[600px] rounded-md w-[700px]">
//         <h1 className="text-[25px] mb-8 font-semibold mt-5">TO DO List</h1>
//         <form>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border w-[300px] h-[50px] rounded-md"
//             placeholder="Enter a task"
//             type="text"
//           />
//           <button
//             onClick={handleClick}
//             className="border text-white text-[17px] bg-lime-700 w-[100px] h-[50px] rounded-md"
//           >
//             Add Task
//           </button>
//           <button
//             onClick={handleDeleteAll}
//             className="border text-[16px] mt-1 text-white bg-red-500 w-[100px] h-[50px] rounded-md"
//           >
//             Delete All 🗑
//           </button>
//         </form>

//         <div className="progress-bar bg-gray-300 rounded-md h-[20px] w-[400px] m-auto mt-5">
//           <div
//             className="bg-lime-700 h-[20px] rounded-md"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//         <p className="mt-2">{`Progress: ${completedTasks} of ${data.length} (${progress.toFixed(
//           1
//         )}%)`}</p>

//         {data.length > 0 &&
//           data.map((task, i) => (
//             <div
//               key={i}
//               className={`bg-gray-50 ml-36 w-[400px] h-[60px] text-left rounded-md flex mt-2 justify-between items-center ${
//                 task.completed ? "line-through text-gray-500" : ""
//               }`}
//             >
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => toggleCompleted(i)}
//                   className="mr-3"
//                 />
//                 <div>{task.name}</div>
//               </div>
//               <button
//                 onClick={() => handleDelete(i)}
//                 className="border text-[18px] text-white bg-red-500 w-[100px] h-[50px] rounded-md"
//               >
//                 Delete 🗑
//               </button>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// 3

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function UserCard({ user }) {
//   return (
//     <div className="border p-4 rounded-lg shadow-md bg-white text-gray-700">
//       <h2 className="text-xl font-semibold">{user.name}</h2>
//       <p className="text-sm text-gray-500">{user.email}</p>
//       <p className="text-sm mt-2">
//         <strong>Company:</strong> {user.company.name}
//       </p>
//       <p className="text-sm">
//         <strong>Phone:</strong> {user.phone}
//       </p>
//     </div>
//   );
// }

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-bold text-center mb-6">User List</h1>
//       <div className="mb-6 text-center">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border rounded-lg w-[300px] h-[40px] p-2 shadow-sm"
//           placeholder="Search by name..."
//         />
//       </div>
//       {loading && <p className="text-center">Yuklanmoqda...</p>}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {!loading && filteredUsers.length > 0 ? (
//           filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
//         ) : (
//           !loading && <p className="text-center">No users found!</p>
//         )}
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

// 5-masala
// import React from 'react'
// import Dark from './components/Dark'

// function App() {
//   return (
//     <div>
//       <Dark/>
//     </div>
//   )
// }

// export default App