const Worksheet = () => {
    return (
      <div>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
          <h2 className="text-lg font-semibold  capitalize dark:text-white">
            Account settings
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label>Tasks</label>
                <select className="block w-full px-4 py-2 mt-2  border rounded-md  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40 dark:focus:border-cyan-300 focus:outline-none focus:ring">
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Content">Content</option>
                  <option value="Paper-Work">Paper-Work</option>
                </select>
              </div>

              <div>
                <label>Hours Worked</label>
                <input
                  placeholder="Hours Worked"
                  className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40 dark:focus:border-cyan-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label>Date</label>
                <input
                  placeholder="Date"
                  className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40 dark:focus:border-cyan-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                value="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-cyan-500 rounded-md  focus:outline-none focus:bg-cyan-600 w-full hover:bg-cyan-600"
              >
                Save
              </button>
            </div>
          </form>
          
            
        </section>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-xl text-black bg-cyan-500">
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16 object-cover rounded-full">
                          <img
                            className="object-cover"
                            src=""
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-md "></td>
                  <td className="text-lg"></td>
                  <th>
                    <button className="btn btn-sm bg-red-500 hover:bg-rose-700 text-white text-2xl">
                      X
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Worksheet;
