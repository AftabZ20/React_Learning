import React from "react";

const UserList = () => {
  const usersInfo = [
    {
      id: 1,
      name: "Aftab",
      age: 24,
    },
    {
      id: 2,
      name: "Shoaib",
      age: 22,
    },
    {
      id: 3,
      name: "Wahab",
      age: 23,
    },
  ];

  return <div>
    {
        usersInfo.map(user => (
            <div key = {user.id}>
                <h1>Name: {user.name}</h1>
                <h1>Age: {user.age}</h1>
            </div>
        ))
    }
  </div>;
};

export default UserList;
