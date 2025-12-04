import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Components/Loading/Loading";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: parcle = {}, isLoading } = useQuery({
    queryKey: ["parcels", parcelId],
    enabled: !!parcelId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcle.cost,
      parcelId: parcle._id,
      senderEmail: parcle.senderEmail,
      parcelName: parcle.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    window.location.href = res.data.url;
  };


  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="page-body">
      <h2 className="page-title">
        Plese Pay {parcle.cost} BDT for {parcle.parcelName}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary">
        Pay
      </button>
    </div>
  );
};

export default Payment;
