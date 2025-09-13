import { useState } from "react";

function Invoices() {
  const [invoices, setInvoices] = useState([
    { number: "INV-001", date: "2025-09-13", client: "Anna Kowalska", amount: 250 },
  ]);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Faktury</h2>

      {/* Formularz do dodania faktury będzie tutaj */}

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Numer</th>
            <th className="border p-2">Data</th>
            <th className="border p-2">Klient</th>
            <th className="border p-2">Kwota</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv, i) => (
            <tr key={i}>
              <td className="border p-2">{inv.number}</td>
              <td className="border p-2">{inv.date}</td>
              <td className="border p-2">{inv.client}</td>
              <td className="border p-2">{inv.amount} zł</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Invoices;
