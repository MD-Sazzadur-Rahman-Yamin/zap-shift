import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
      <div className="page-body flex justify-center items-center flex-col gap-4">
        <h2 className="page-title">Payment Cancelled. Please try again</h2>
        <Link to="/dashboard/my-parcels">
          <button className="btn btn-primary">Go to dashboard</button>
        </Link>
      </div>
    );
};

export default PaymentCancelled;