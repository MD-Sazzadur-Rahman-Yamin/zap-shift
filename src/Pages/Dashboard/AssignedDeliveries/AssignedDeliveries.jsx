import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcles", user.email, "driver-assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver-assigned`
      );
      return res.data;
    },
  });
  console.log(parcels);

  return (
    <div className="page-body">
      <h2 className="page-title">Parcel panding pickup: {parcels.length}</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Conform</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td className="flex items-center gap-2">
                  <button className="btn btn-outline hover:text-base-100">
                    Accept
                  </button>
                  <button className="btn btn-outline hover:text-base-100">
                    Reject
                  </button>
                </td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
