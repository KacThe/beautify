import { Link, useLocation } from "react-router-dom";
import { Home, Scissors, Users, BarChart, Calendar, ReceiptText } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-60 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">BeautyERP</h1>

      <Link
        to="/"
        className={`flex items-center gap-2 mb-4 p-2 rounded hover:bg-gray-700 ${
          isActive("/") ? "bg-gray-800" : ""
        }`}
      >
        <Home size={18} /> Dashboard
      </Link>

      <Link
        to="/services"
        className={`flex items-center gap-2 mb-4 p-2 rounded hover:bg-gray-700 ${
          isActive("/services") ? "bg-gray-800" : ""
        }`}
      >
        <Scissors size={18} /> Usługi i Cennik
      </Link>

      <Link
        to="/clients"
        className={`flex items-center gap-2 mb-4 p-2 rounded hover:bg-gray-700 ${
          isActive("/clients") ? "bg-gray-800" : ""
        }`}
      >
        <Users size={18} /> Klienci
      </Link>

      <Link
        to="/finance"
        className={`flex items-center gap-2 mb-4 p-2 rounded hover:bg-gray-700 ${
          isActive("/finance") ? "bg-gray-800" : ""
        }`}
      >
        <BarChart size={18} /> Finanse
      </Link>

      <Link
        to="/calendar"
        className={`flex items-center gap-2 mb-4 p-2 rounded hover:bg-gray-700 ${
          isActive("/calendar") ? "bg-gray-800" : ""
        }`}
      >
        <Calendar size={18} /> Kalendarz
      </Link>

      <Link
        to="/invoices"
        className={`flex items-center gap-2 mb-4 p-2 rounded hover:bg-gray-700 ${
          isActive("/invoices") ? "bg-gray-800" : ""
        }`}
      >
        <ReceiptText size={18} /> Faktury
      </Link>      
    </div>
  );
};

export default Sidebar;
