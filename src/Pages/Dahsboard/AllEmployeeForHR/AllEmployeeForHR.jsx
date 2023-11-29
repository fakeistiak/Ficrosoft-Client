import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

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
    console.log(id);
    axiosPublic
      .patch(`/employee/${id}`)
      .then(() => {
        console.log("verified");
        refetch();
      })
      .catch((err) => {
        console.log(err);
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
            <tr className="text-lg text-white bg-gray-800">
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
                  <th>{id}</th>
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
                      className="px-4 mt-1 py-2 ml-4 font-semibold rounded-lg bg-gray-100 hover:bg-gray-200 text-white"
                      onClick={() => handleVerified(employee?._id)}
                      disabled={employee.isVerified === true}
                    >
                      {employee.isVerified === true ? "\u2705" : "\u274C"}{" "}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={onOpenModal}
                      className="px-4 py-2 ml-4 mt-1 font-semibold rounded-lg bg-rose-500 hover:bg-rose-600 text-white"
                    >
                      Pay
                    </button>
                    <Modal open={open} onClose={onCloseModal} center>
                      <h2>Simple centered modal</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                              <img
                                  className="w-40 h-40 object-cover text-center"
                        src="https://i.ibb.co/ZVh7M1Q/387501024-1007987763739101-7675142294012035243-n.jpg"
                        alt=""
                      />
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
