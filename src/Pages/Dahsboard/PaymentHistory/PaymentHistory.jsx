import paymentsData from "../../../../public/payments.json";

const PaymentHistory = () => {
  return (
    <div>
      <div className="overflow-x-auto mt-8">
        <h2 className="lg:text-5xl font-bold text-cyan-500 font-serif py-4 capitalize text-center">
          Salary Paid by HR
        </h2>
        <table className="table max-full mx-auto overflow-x-auto">
          {/* head */}
          <thead>
            <tr className="text-lg text-white bg-gray-800">
              <th>#</th>
              <th>Month</th>
              <th>Amount</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody className=" text-black">
            {paymentsData.map((payment, index) => (
              <tr key={payment._id} className="bg-cyan-400 text-white">
                <th>{index + 1}</th>
                <td className="text-md font-semibold">{payment.month}</td>
                <td className="text-md font-semibold">
                  {payment.transactionId}
                </td>
                <td className="text-md font-semibold pl-12">{payment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
