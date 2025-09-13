import { useState } from "react";

export default function AddClientForm({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    onAdd({ id: Date.now(), name, phone });
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Imię i nazwisko"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <input
        type="tel"
        placeholder="Telefon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded w-40"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Dodaj
      </button>
    </form>
  );
}
