import { useState } from "react";
import RevenueChart from "../components/Chart/RevenueChart";

function Finance() {
  // przykładowe dane rezerwacji
  const [bookings] = useState([
    { service: "Manicure hybrydowy", price: 120, date: "2025-09-01" },
    { service: "Pedicure", price: 150, date: "2025-09-03" },
    { service: "Manicure hybrydowy", price: 120, date: "2025-09-05" },
    { service: "Pedicure", price: 150, date: "2025-08-28" },
  ]);

  // Oblicz przychód miesięczny
  const monthlyRevenue = bookings.reduce((acc, b) => {
    const month = b.date.slice(0, 7); // YYYY-MM
    if (!acc[month]) acc[month] = 0;
    acc[month] += b.price;
    return acc;
  }, {});

  // Przygotuj dane do wykresu
  const chartData = Object.entries(monthlyRevenue).map(([month, revenue]) => ({ month, revenue }));

  // Całkowity przychód
  const totalRevenue = bookings.reduce((sum, b) => sum + b.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Finanse</h2>

      <p className="mb-4 text-lg">
        Całkowity przychód: <span className="font-bold">{totalRevenue} zł</span>
      </p>

      <RevenueChart data={chartData} />

      <table className="w-full border-collapse border mt-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left">Data</th>
            <th className="border p-2 text-left">Usługa</th>
            <th className="border p-2 text-right">Cena (zł)</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td className="border p-2">{b.date}</td>
              <td className="border p-2">{b.service}</td>
              <td className="border p-2 text-right">{b.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Finance;
