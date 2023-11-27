import { NavLink, Outlet } from 'react-router-dom';
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlinePayment } from 'react-icons/md';
import EmployeeProfile from '../Pages/Dahsboard/EmployeeProfile/EmployeeProfile';
import { FaHouse } from 'react-icons/fa6';
import useWorksheet from '../hooks/useWorksheet';

const Dashboard = () => {
 const [worksheet] = useWorksheet();
    return (
      <div className="flex text-white">
        <div className="mx-auto w-84 min-h-screen bg-cyan-700 flex pt-12">
          <ul className="menu p-4">
            <EmployeeProfile></EmployeeProfile>
            <li className="text-xl">
              <NavLink to="/">
                <FaHouse /> User Home
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/dashboard/worksheet">
                <LuFileSpreadsheet /> WorkSheet: {worksheet.length}
              </NavLink>
            </li>
            <li className='text-xl'>
              <NavLink to="/dashboard/payHistory">
                <MdOutlinePayment></MdOutlinePayment> Payment History
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;