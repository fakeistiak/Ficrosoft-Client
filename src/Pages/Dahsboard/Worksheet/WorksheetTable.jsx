

const WorksheetTable = () => {
 

  return (
    <div>
      <div className="overflow-x-auto mt-8">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-lg text-white bg-gray-800">
              <th>#</th>
              <th>Tasks</th>
              <th>Hours Worked</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
              <tr className="bg-base-200 text-black">
                <th></th>
                <td></td>
                <td className="text-md"></td>
                <td className="text-lg"></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorksheetTable;
