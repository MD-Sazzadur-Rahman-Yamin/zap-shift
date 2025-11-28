import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [paymentInfo, setPaymentInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="page-body flex justify-center items-center flex-col gap-4">
      <h2 className="page-title">Payment Successful</h2>
      <p>Your transaction id: {paymentInfo.transactionId}</p>
      <p>Your tracking id: {paymentInfo.trackingId}</p>
      <Link to="/dashboard/my-parcels">
        <button className="btn btn-primary">Go to dashboard</button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
