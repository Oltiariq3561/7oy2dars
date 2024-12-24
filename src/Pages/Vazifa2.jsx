import React, { useState } from "react";

function Vazifa2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  function handleClick(e) {
    e.preventDefault();

    const user = {
      name,
      email,
      address,
      id: Date.now(),
    };

    setData([...data, user]);

    setName("");
    setEmail("");
    setAddress("");
  }

  return (
    <>
      <div className="container w-[586px] h-[554px] bg-white mt-20 rounded-[12px] m-auto">
        <form className="w-[554px] pt-[16px] m-auto">
          <h1 className="text-[16px] mb-[32px]">Edit address</h1>
          <div className="flex justify-between">
            <div>
              <label className="text-[14px]">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[269px] mt-2 h-[46px] rounded-[8px] border"
                placeholder="Name..."
                type="text"
              />
            </div>
            <div>
              <label className="text-[14px]">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[269px] mt-2 mb-4 h-[46px] rounded-[8px] border"
                placeholder="Email..."
                type="email"
              />
            </div>
          </div>
          <div>
            <label>Billing address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="resize-none rounded-[8px] border mt-[8px] w-[554px] h-[86px]"
            />
          </div>
        </form>
        <div className="flex w-[554px] m-auto justify-between">
          <button
            onClick={handleClick}
            className="w-[269px] border h-[46px] rounded-[8px]"
          >
            Cancel
          </button>
          <button
            onClick={handleClick}
            className="w-[269px] h-[46px] bg-[#a020f0] rounded-[8px]"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="container w-[1200px] flex flex-wrap gap-[30px] m-auto justify-center">
        {data.length > 0 &&
          data.map((v) => (
            <div
              key={v.id}
              className="wrapper w-[350px] mt-14 bg-cream px-6 py-4 rounded-md shadow-md bg-gray-800 border border-gray-200"
            >
              <h1 className=" text-[white] mb-2 text-lg font-medium">
                Name: <span className="font-normal">{v.name}</span>
              </h1>
              <h1 className=" text-[white] mb-2 text-lg font-medium">
                Email: <span className="font-normal">{v.email}</span>
              </h1>
              <h1 className=" text-[white] mb-2 text-lg font-medium">
                Address: <span className="font-normal">{v.address}</span>
              </h1>
            </div>
          ))}
      </div>
    </>
  );
}

export default Vazifa2;