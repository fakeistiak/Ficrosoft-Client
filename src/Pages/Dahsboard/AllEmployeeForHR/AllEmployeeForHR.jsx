import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Swal from "sweetalert2";

const AllEmployeeForHR = () => {
  // Modal
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { data: allEmployee = [], refetch } = useQuery({
    queryKey: ["allEmployee"],
    queryFn: async () => {
      const res = await axiosSecure.get("/employee", {
        headers: {
          Authorization: `Bearer${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

   const handleVerified = (id) => {
     // Show SweetAlert confirmation
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
         // User clicked "Yes," proceed with verification
         axiosPublic
           .patch(`/employee/${id}`)
           .then(() => {
             // Verification successful, you can show another success alert if needed
             Swal.fire(
               "Verified!",
               "The employee has been verified.",
               "success"
             );
             refetch();
           })
           .catch((err) => {
             // Handle verification error
             console.log(err);
             Swal.fire("Error", "Failed to verify the employee.", "error");
           });
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
            {allEmployee?.map((employee, id) => {
              return (
                <tr key={employee._id} className="bg-cyan-400 text-white">
                  <th>{id+1}</th>
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
                    {/* ... */}
                    <button
                      className="px-4 py-2 ml-4 font-semibold rounded-lg bg-gray-100 hover:bg-gray-200 text-black"
                      onClick={() => handleVerified(employee?._id)}
                      disabled={employee.isVerified === true}
                    >
                      {employee.isVerified === true
                        ? "Verified \u2705"
                        : "Verify \u274C"}
                    </button>
                    {/* ... */}
                  </td>
                  <td>
                    <button
                      onClick={onOpenModal}
                      className={`px-4 py-2 ml-4 mt-1 font-semibold rounded-lg ${
                        employee.isVerified
                          ? "bg-rose-500 hover:bg-rose-600"
                          : "bg-gray-300 cursor-not-allowed"
                      } text-white`}
                      disabled={!employee.isVerified}
                    >
                      Pay
                    </button>
                    <Modal open={open} onClose={onCloseModal} center>
                     
                    </Modal>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployeeForHR;
