 
import Sidebar from '../../components/Admin/Navbar';
import Navbar from '../../components/Admin/Sidebar';
import { Outlet } from 'react-router-dom'; // Outlet will render the nested routes

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6 bg-gray-100 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
