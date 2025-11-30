import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiShieldOff } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (u) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${u._id}/role`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        toast(`${u.displayName} marked as an Admin!`);
      }
    });
  };

  const handleRemoveAdmin = (u) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/users/${u._id}/role`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        toast(`${u.displayName} removed from admin!`);
      }
    });
  };

  const tableHead = (
    <>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
        <th>Joined</th>
        <th>Admin Action</th>
      </tr>
    </>
  );
  return (
    <div className="page-body">
      <h2 className="page-title">Manage Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>{tableHead}</thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u._id}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-8 rounded">
                      <img src={u.photoURL} alt={u.displayName} />
                    </div>
                  </div>
                </th>
                <td>{u.displayName}</td>
                <td>{u.role}</td>
                <td>{u.email}</td>
                <td>{u.createdAt}</td>
                <td>
                  {u.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(u)}
                      className="btn btn-square btn-outline hover:text-base-100"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(u)}
                      className="btn btn-square btn-outline hover:text-base-100"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>{tableHead}</tfoot>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
