// src/components/Sidebar.js
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
      <nav className="mt-10">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "block py-2.5 px-4 bg-gray-700"
              : "block py-2.5 px-4 hover:bg-gray-700"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "block py-2.5 px-4 bg-gray-700"
              : "block py-2.5 px-4 hover:bg-gray-700"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? "block py-2.5 px-4 bg-gray-700"
              : "block py-2.5 px-4 hover:bg-gray-700"
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive
              ? "block py-2.5 px-4 bg-gray-700"
              : "block py-2.5 px-4 hover:bg-gray-700"
          }
        >
          Orders
        </NavLink>
        <NavLink
          to="/sales-summary"
          className={({ isActive }) =>
            isActive
              ? "block py-2.5 px-4 bg-gray-700"
              : "block py-2.5 px-4 hover:bg-gray-700"
          }
        >
          Sales Summary
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
