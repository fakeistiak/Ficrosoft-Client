import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import WorksheetTable from "./WorksheetTable";

const Worksheet = () => {
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const tasks = form.tasks.value;
    const hoursWorked = form.hoursWorked.value;
    const date = selectedDate; // Use the selectedDate from the state
    const order = {
      employeeName: name,
      date,
      hoursWorked,
      tasks,
    };

    console.log(order);

    fetch("http://localhost:5000/worksheet", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="my-12">
      <section className="max-w-4xl p-6 mx-auto bg-base-200 rounded-md shadow-md text-black">
        <h2 className="lg:text-2xl font-semibold  capitalize text-center">
          Work-Sheet
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label>Hours Worked</label>
              <input
                defaultValue={user?.displayName}
                name="name"
                placeholder="Hours Worked"
                className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40 dark:focus:border-cyan-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label>Tasks</label>
              <select
                name="tasks"
                className="block w-full px-4 py-2 mt-2  border rounded-md  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40 dark:focus:border-cyan-300 focus:outline-none focus:ring"
              >
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Content">Content</option>
                <option value="Paper-Work">Paper-Work</option>
              </select>
            </div>

            <div>
              <label>Hours Worked</label>
              <input
                name="hoursWorked"
                placeholder="Hours Worked"
                className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40 dark:focus:border-cyan-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label>Date</label>
              <input
                name="date"
                placeholder="Date"
                type="date"
                onChange={(e) => handleDateChange(e.target.value)}
                className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40 dark:focus:border-cyan-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              value="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-cyan-500 rounded-md  focus:outline-none focus:bg-cyan-600 w-full hover:bg-cyan-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <WorksheetTable></WorksheetTable>
    </div>
  );
};

export default Worksheet;
