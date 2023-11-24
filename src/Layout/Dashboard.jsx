import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="w-64 min-h-full bg-cyan-400">
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;