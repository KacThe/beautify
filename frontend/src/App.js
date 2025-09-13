import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Finance from "./pages/Finance";
import Calendar from "./pages/Calendar";
import Invoices from "./pages/Invoices";
import Login from "./pages/Login";
import Home from "./pages/Home";

import './index.css';

function App() {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        {/* PUBLICZNE STRONY */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* ADMIN PANEL */}
        {isAuthenticated && (
          <Route
            path="/*"
            element={
              <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/finance" element={<Finance />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/invoices" element={<Invoices />} />
                  </Routes>
                </div>
              </div>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
