import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";

const AllEmployeeForHR = () => {
  const { user } = React.useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [payModalOpen, setPayModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    month: "",
    year: "",
  });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { data: allEmployee = [], refetch } = useQuery({
    queryKey: ["allEmployee"],
    queryFn: async () => {
      const res = await axiosSecure.get("/employee", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  const handleVerified = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once verified, you cannot undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, verify it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .patch(`/employee/${id}`)
          .then(() => {
            Swal.fire(
              "Verified!",
              "The employee has been verified.",
              "success"
            );
            refetch();
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("Error", "Failed to verify the employee.", "error");
          });
      }
    });
  };

  const openPayModal = (employee) => {
    setPayModalOpen(true);
    setSelectedEmployee(employee);
    setPaymentDetails({
      month: "",
      year: "",
    });
  };

  const closePayModal = () => {
    setPayModalOpen(false);
    setSelectedEmployee(null);
    setPaymentDetails({
      month: "",
      year: "",
    });
  };

const handlePay = async (e) => {
  e.preventDefault();
  if (!paymentDetails.month || !paymentDetails.year) {
    Swal.fire("Error", "Please fill in all payment details", "error");
    return;
  }

  Swal.fire({
    title: "Are you sure?",
    text: "Once paid, you cannot undo this action!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, pay it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Congratulations",
        text: `You have paid ${user.displayName} successfully`,
        icon: "success",
        timer: 2000,
      });
      closePayModal();
    }
  });
};



  return (
    <div>
      <div className="mt-8">
        <h2 className="lg:text-2xl font-bold text-black py-4 capitalize text-center">
          All Employees
        </h2>
        <table className="table max-w-full mx-auto overflow-x-auto">
          <thead>
            <tr className="text-lg text-white bg-black">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Bank-Acc</th>
              <th>Salary</th>
              <th>Verified</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className=" text-black">
            {allEmployee?.map((employee, id) => (
              <tr key={employee._id} className="bg-cyan-400 text-white">
                <th>{id + 1}</th>
                <td className="lg:text-md sm:text-sm font-semibold">
                  {" "}
                  {employee?.name}
                </td>
                <td className="lg:text-md sm:text-sm font-semibold">
                  {employee?.email}
                </td>
                <td className="lg:text-md sm:text-sm font-semibold">
                  {employee?.bank_account_no}
                </td>
                <td className="lg:text-md sm:text-sm font-semibold">
                  {" "}
                  {employee?.salary}
                </td>
                <td>
                  <button
                    className="px-4 py-2 ml-4 font-semibold rounded-lg bg-gray-100 hover:bg-gray-200 text-black"
                    onClick={() => handleVerified(employee?._id)}
                    disabled={employee.isVerified === true}
                  >
                    {employee.isVerified === true
                      ? "Verified \u2705"
                      : "Verify \u274C"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => openPayModal(employee)}
                    className={`px-4 py-2 ml-4 mt-1 font-semibold rounded-lg ${
                      employee.isVerified
                        ? "bg-rose-500 hover:bg-rose-600"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white`}
                    disabled={!employee.isVerified}
                  >
                    {employee.isPaid ? "Paid ✅" : "Pay"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pay Modal */}
      <Modal open={payModalOpen} onClose={closePayModal} center>
        <form onSubmit={handlePay}>
          <div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold mb-4">Pay Employee</h2>
                <img
                  className="w-60 h-60 object-cover rounded-lg"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div className="pt-12 pl-20 flex-col justify-between">
                <p className="text-xl font-semibold">
                  Employee: {selectedEmployee?.name}
                </p>
                <p className="text-xl font-semibold pb-8">
                  Salary: {selectedEmployee?.salary}
                </p>
                <select
                  required
                  className="block w-full py-2 text-gray-700 bg-white border rounded-lg px-4 my-2"
                  value={paymentDetails.month}
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      month: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Select a month
                  </option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <input
                  className="block w-full py-2 text-gray-700 bg-white border rounded-lg px-4"
                  type="text"
                  placeholder="2023"
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      year: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className={`px-4 py-2 mt-4 w-full rounded-lg ${
                !paymentDetails.month || !paymentDetails.year
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-rose-500 hover:bg-rose-600"
              } text-white`}
              disabled={!paymentDetails.month || !paymentDetails.year}
            >
              Pay: ({selectedEmployee?.salary})
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AllEmployeeForHR;
