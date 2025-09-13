import { useState } from "react";
import AddBookingForm from "../components/Booking/AddBookingForm";

function Calendar() {
  const [clients] = useState([
    { name: "Anna Kowalska" },
    { name: "Maria Nowak" },
  ]);
  const [services] = useState([
    { name: "Manicure hybrydowy" },
    { name: "Pedicure" },
  ]);
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kalendarz Rezerwacji</h2>

      <AddBookingForm clients={clients} services={services} addBooking={addBooking} />

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left">Klientka</th>
            <th className="border p-2 text-left">Usługa</th>
            <th className="border p-2 text-left">Data</th>
            <th className="border p-2 text-left">Godzina</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td className="border p-2">{b.client}</td>
              <td className="border p-2">{b.service}</td>
              <td className="border p-2">{b.date}</td>
              <td className="border p-2">{b.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
