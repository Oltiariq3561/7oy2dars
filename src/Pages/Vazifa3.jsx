import React, { useEffect, useState } from "react";
import axios from "axios";

function UserCard({ user }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white text-gray-700">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-500">{user.email}</p>
      <p className="text-sm mt-2">
        <strong>Company:</strong> {user.company.name}
      </p>
      <p className="text-sm">
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-6">User List</h1>
      <div className="mb-6 text-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg w-[300px] h-[40px] p-2 shadow-sm"
          placeholder="Search by name..."
        />
      </div>
      {loading && <p className="text-center">Yuklanmoqda...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          !loading && <p className="text-center">No users found!</p>
        )}
      </div>
    </div>
  );
}

export default Users;