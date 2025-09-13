import ClientRow from "./ClientRow";

export default function ClientTable({ clients, onEdit, onRemove }) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2 text-left">Imię i nazwisko</th>
          <th className="border p-2 text-left">Telefon</th>
          <th className="border p-2 text-left">Akcje</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((c) => (
          <ClientRow key={c.id} client={c} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </tbody>
    </table>
  );
}
