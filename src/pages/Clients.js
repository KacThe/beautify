import { useState } from "react";
import AddClientForm from "../components/Client/AddClientForm";
import ClientTable from "../components/Client/ClientTable";

export default function Clients() {
  const [clients, setClients] = useState([
    { id: 1, name: "Anna Kowalska", phone: "600123456" },
    { id: 2, name: "Maria Nowak", phone: "501987654" },
  ]);

  // Dodawanie klienta
  const handleAddClient = (client) => {
    setClients([...clients, client]);
  };

  // Edycja klienta
  const handleEditClient = (id, updatedData) => {
    setClients(
      clients.map((c) => (c.id === id ? { ...c, ...updatedData } : c))
    );
  };

  // Usuwanie klienta
  const handleRemoveClient = (id) => {
    setClients(clients.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Klientki</h2>
      <AddClientForm onAdd={handleAddClient} />
      <ClientTable
        clients={clients}
        onEdit={handleEditClient}
        onRemove={handleRemoveClient}
        
      />
    </div>
  );
  
}
