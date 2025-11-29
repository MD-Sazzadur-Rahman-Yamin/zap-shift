import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["rider", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    console.log(rider)
    const updatedData = {
      status: status,
      email:rider.email,
    };
    axiosSecure.patch(`/riders/${rider._id}`, updatedData).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`Rider status is set to ${status}`);
      }
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  return (
    <div className="page-body">
      <h2 className="page-title">Approve Riders</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td>{rider.status}</td>
                <td className="flex items-center gap-2">
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-square btn-outline hover:text-base-100"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn btn-square btn-outline hover:text-base-100"
                  >
                    <IoPersonRemoveSharp />
                  </button>
                  <button className="btn btn-square btn-outline hover:text-base-100">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
