import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcles", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`
      );
      return res.data;
    },
  });

  const handleStatusUpdate = (parcel, status) => {
    const statusInfo = { deliveryStatus: status, riderId: parcel.riderId };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          toast.success(
            `Parcel status updated with ${status.split("_").join(" ")}`
          );
        }
      });
  };

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
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td className="flex items-center gap-2">
                  {parcel.deliveryStatus === "driver_assigned" ? (
                    <>
                      <button
                        className="btn btn-outline hover:text-base-100"
                        onClick={() =>
                          handleStatusUpdate(parcel, "rider_arriving")
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-outline hover:text-base-100"
                        // onClick={() =>
                        //   handleStatusUpdate(parcel, "parcel_picked_up")
                        // }
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span>Accepted</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-outline hover:text-base-100"
                    onClick={() =>
                      handleStatusUpdate(parcel, "parcel_picked_up")
                    }
                  >
                    Mark as pickup
                  </button>
                  <button
                    className="btn btn-outline hover:text-base-100"
                    onClick={() =>
                      handleStatusUpdate(parcel, "parcel_delivered")
                    }
                  >
                    Mark as delivered
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

export default AssignedDeliveries;
