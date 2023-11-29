import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useRole from "../../hooks/useRole";

const AllEmployee = () => {
  const role = useRole();
  console.log(role);

  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user", {
        headers: {
          Authorization: `Bearer${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });
  const handleFireUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Fired it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Fired!",
              text: "Your user has been Fired.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleChangeRole = (user) => {
    Swal.fire({
      title: `Are you sure you want to make ${user.name} HR?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} is HR now`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-semibold text-black">
          All User:{users.length}
        </h2>
      </div>
      <div>
        <div className="mt-8">
          <h2 className="lg:text-2xl font-bold text-black py-4 capitalize text-center">
            Employees Table
          </h2>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-lg text-white bg-cyan-400">
                <th>#</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Change Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-black">
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td className="text-lg">{user.name}</td>
                  <td className="text-lg">{user.designation}</td>
                  <th>
                    {user.role === "HR" ? (
                      "HR"
                    ) : user.role === "hr" ? (
                      "HR" // Display static text for hr role
                    ) : (
                      <button
                        onClick={() => handleChangeRole(user)}
                        className="px-4 py-1 rounded-md bg-cyan-500 hover:bg-cyan-700 text-white font-semibold text-lg"
                      >
                        {user.role}
                      </button>
                    )}
                  </th>
                  <th>
                    <button
                      onClick={() => handleFireUser(user)}
                      className="px-4 py-1 rounded-md bg-red-500 hover:bg-rose-700 text-white font-semibold text-lg"
                      disabled={user.role === "hr"} // Disable button for hr role
                    >
                      Fire
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEmployee;
