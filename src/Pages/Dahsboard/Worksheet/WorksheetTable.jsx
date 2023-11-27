import useWorksheet from "../../../hooks/useWorksheet";

const WorksheetTable = () => {
    const [worksheet] = useWorksheet();
  return (
    <div>
      <div className="overflow-x-auto mt-8">
        <h2 className="lg:text-2xl font-bold text-black py-4 capitalize text-center">
          Work-Sheet Table
        </h2>
        <table className="table max-w-4xl mx-auto overflow-x-auto">
          {/* head */}
          <thead>
            <tr className="text-lg text-white bg-gray-800">
              <th>#</th>
              <th>Tasks</th>
              <th>Hours Worked</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className=" text-black">
            {worksheet.map((item, index) => (
              <tr key={item._id} className="bg-green-300 text-black">
                <th>{index + 1}</th>
                <td className="text-md font-semibold">{item.tasks}</td>
                <td className="text-md font-semibold pl-20">{item.hoursWorked}</td>
                <td className="text-md font-semibold">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorksheetTable;
