import { useState } from "react";

function AddServiceForm() {
  const [services, setServices] = useState([
    { id: 1, name: "Manicure hybrydowy", price: 120, duration: 90 },
    { id: 2, name: "Pedicure", price: 150, duration: 120 },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDuration, setEditDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !duration) return;

    setServices([
      ...services,
      { id: Date.now(), name, price: Number(price), duration: Number(duration) },
    ]);
    setName("");
    setPrice("");
    setDuration("");
  };

  const removeService = (id) => {
    setServices(services.filter((s) => s.id !== id));
    if (editingId === id) cancelEdit();
  };

  const startEdit = (service) => {
    setEditingId(service.id);
    setEditName(service.name);
    setEditPrice(service.price);
    setEditDuration(service.duration);
  };

  const saveEdit = (id) => {
    setServices(
      services.map((s) =>
        s.id === id
          ? {
              ...s,
              name: editName,
              price: Number(editPrice),
              duration: Number(editDuration),
            }
          : s
      )
    );
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName("");
    setEditPrice("");
    setEditDuration("");
  };

  return (
    <div>
      {/* Formularz dodawania nowej usługi */}
      <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Nazwa usługi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <input
          type="number"
          placeholder="Cena (zł)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded w-32"
        />
        <input
          type="number"
          placeholder="Czas (min)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border p-2 rounded w-32"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Dodaj
        </button>
      </form>

      {/* Tabela usług z edycją w miejscu */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left w-64">Usługa</th>
            <th className="border p-2 text-left w-32">Cena (zł)</th>
            <th className="border p-2 text-left w-32">Czas (min)</th>
            <th className="border p-2 text-left w-48">Akcje</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s.id} className="hover:bg-gray-100">
              <td className="border p-2 h-12 align-middle">
                {editingId === s.id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  <span className="inline-block w-full">{s.name}</span>
                )}
              </td>
              <td className="border p-2 h-12 align-middle">
                {editingId === s.id ? (
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    className="border p-1 rounded w-24"
                  />
                ) : (
                  <span className="inline-block w-24">{s.price}</span>
                )}
              </td>
              <td className="border p-2 h-12 align-middle">
                {editingId === s.id ? (
                  <input
                    type="number"
                    value={editDuration}
                    onChange={(e) => setEditDuration(e.target.value)}
                    className="border p-1 rounded w-24"
                  />
                ) : (
                  <span className="inline-block w-24">{s.duration}</span>
                )}
              </td>
              <td className="border p-2 h-12 align-middle">
                <div className="flex gap-2">
                  {editingId === s.id ? (
                    <>
                      <button
                        onClick={() => saveEdit(s.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Zapisz
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                      >
                        Anuluj
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => startEdit(s)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Edytuj
                    </button>
                  )}
                  <button
                    onClick={() => removeService(s.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Usuń
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddServiceForm;
