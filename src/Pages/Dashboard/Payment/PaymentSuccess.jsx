import React from 'react';
import { Link } from 'react-router';

const PaymentSuccess = () => {
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