import { useState } from "react";
import RevenueChart from "../components/Chart/RevenueChart";

function Dashboard() {
  // przykładowe dane
  const [clients] = useState([
    { name: "Anna" },
    { name: "Kasia" },
    { name: "Magda" },
  ]);

  const [bookings] = useState([
    { client: "Anna", service: "Manicure hybrydowy", price: 120, date: "2025-09-01" },
    { client: "Kasia", service: "Pedicure", price: 150, date: "2025-09-03" },
    { client: "Magda", service: "Manicure hybrydowy", price: 120, date: "2025-09-05" },
    { client: "Anna", service: "Pedicure", price: 150, date: "2025-08-28" },
    { client: "Kasia", service: "Manicure hybrydowy", price: 120, date: "2025-08-30" },
  ]);

  const [selectedClient, setSelectedClient] = useState("all");

  // filtracja danych po kliencie
  const filteredBookings =
    selectedClient === "all"
      ? bookings
      : bookings.filter((b) => b.client === selectedClient);

  // całkowity przychód
  const totalRevenue = filteredBookings.reduce((sum, b) => sum + b.price, 0);

  // najpopularniejsza usługa
  const serviceCounts = filteredBookings.reduce((acc, b) => {
    acc[b.service] = (acc[b.service] || 0) + 1;
    return acc;
  }, {});
  const mostPopularService = Object.keys(serviceCounts).reduce(
    (a, b) => (serviceCounts[a] > serviceCounts[b] ? a : b),
    ""
  );

  // dane do wykresu przychodów po miesiącach
  const monthlyRevenue = filteredBookings.reduce((acc, b) => {
    const month = b.date.slice(0, 7); // YYYY-MM
    if (!acc[month]) acc[month] = 0;
    acc[month] += b.price;
    return acc;
  }, {});

  const chartData = Object.entries(monthlyRevenue).map(([month, revenue]) => ({ month, revenue }));

  // ostatnie 5 rezerwacji
  const recentBookings = filteredBookings.slice(-5).reverse();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Karty ze statystykami */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Liczba klientów</p>
          <h2 className="text-2xl font-bold">{clients.length}</h2>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Ilość usług</p>
          <h2 className="text-2xl font-bold">{filteredBookings.length}</h2>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Przychód</p>
          <h2 className="text-2xl font-bold">{totalRevenue} zł</h2>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Najpopularniejsza usługa</p>
          <h2 className="text-2xl font-bold">{mostPopularService}</h2>
        </div>
      </div>

      {/* Dropdown wyboru klienta */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filtruj po kliencie:</label>
        <select
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">Wszystkie</option>
          {clients.map((c, i) => (
            <option key={i} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Wykres przychodów */}
      <h3 className="text-lg font-bold mb-2">Przychody miesięczne</h3>
      <RevenueChart data={chartData} />

      {/* Ostatnie rezerwacje */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-2">Ostatnie rezerwacje</h3>
        <ul>
          {recentBookings.map((b, i) => (
            <li key={i} className="border-b py-1">
              {b.date} - {b.client} - {b.service} - {b.price} zł
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
