import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssignRiders = () => {
  const axiosSecure = useAxiosSecure();
  const riderModalRef = useRef();

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });

  const openAssignRiderModal = (parent) => {
    riderModalRef.current.showModal();
  };

  const tableTitles = (
    <>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Cost</th>
        <th>Created At</th>
        <th>Pickup Diatrict</th>
        <th>Action</th>
      </tr>
    </>
  );
  return (
    <div className="page-body">
      <h2 className="page-title">Assign Riders: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>{tableTitles}</thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.createAt}</td>
                <td>{parcel.senderDistrict}</td>
                <td>
                  <button
                    onClick={() => openAssignRiderModal(parcel)}
                    className="btn btn-outline hover:text-base-100"
                  >
                    Assign Riders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>{tableTitles}</tfoot>
        </table>
      </div>
      <dialog
        ref={riderModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline hover:text-base-100">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;
