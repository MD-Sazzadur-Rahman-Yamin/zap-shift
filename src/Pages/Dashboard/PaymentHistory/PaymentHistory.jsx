import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
console.log(user)
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="page-body">
      <h2 className="page-title">Payment History: {payments.length}</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Paid Time</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {payments.map((p, i) => (
              <tr key={p._id}>
                <th>{i + 1}</th>
                <td>Cy Ganderton</td>
                <td>{p.amount} BDT</td>
                <td>{p.paidAt}</td>
                <td>{p.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
