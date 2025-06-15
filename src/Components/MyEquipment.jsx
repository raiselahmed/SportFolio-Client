import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const [items, setItem] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch(`https://sportfolio-d0367.web.app/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
  return (
    <div className="container mx-auto px-4 my-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Data Rows */}
            {items.map((item) => (
              <tr key={item.id || item.email}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt={`${item.name || "User"}'s avatar`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name || "N/A"}</div>
                      <div className="text-sm opacity-50">
                        {item.location || "Unknown"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.email}</td>
                <td>{item.createdAt || "N/A"}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEquipment;
