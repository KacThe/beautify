import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Finance from "./pages/Finance";
import Calendar from "./pages/Calendar";
import Invoices from "./pages/Invoices";
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/invoices" element={<Invoices />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
