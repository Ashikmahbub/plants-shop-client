// src/components/Navbar.js
const Navbar = () => {
    return (
      <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Welcome, Admin</div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-700 px-3 py-1 rounded">Notifications</button>
          <button className="bg-red-500 px-3 py-1 rounded">Logout</button>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  