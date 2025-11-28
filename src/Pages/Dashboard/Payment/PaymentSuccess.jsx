import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const axiosSecure = useAxiosSecure()
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then(res=> console.log(res.data));
    }
  }, [sessionId, axiosSecure]);
    return (
      <div className="page-body flex justify-center items-center flex-col gap-4">
        <h2 className="page-title">Payment Successful</h2>
        <Link to="/dashboard/my-parcels">
          <button className="btn btn-primary">Go to dashboard</button>
        </Link>
      </div>
    );
};

export default PaymentSuccess;