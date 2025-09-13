import { useState } from "react";

function AddBookingForm({ clients, services, addBooking }) {
  const [client, setClient] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!client || !service || !date || !time) return;

    addBooking({ client, service, date, time });
    setClient("");
    setService("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <select
        value={client}
        onChange={(e) => setClient(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Wybierz klientkę</option>
        {clients.map((c, i) => (
          <option key={i} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Wybierz usługę</option>
        {services.map((s, i) => (
          <option key={i} value={s.name}>
            {s.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 rounded"
      />

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Dodaj rezerwację
      </button>
    </form>
  );
}

export default AddBookingForm;
