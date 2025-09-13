import { useState } from "react";

export default function ClientRow({ client, onEdit, onRemove }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(client.name);
  const [phone, setPhone] = useState(client.phone);

  const save = () => {
    onEdit(client.id, { name, phone });
    setIsEditing(false);
  };

  const cancel = () => {
    setName(client.name);
    setPhone(client.phone);
    setIsEditing(false);
  };

  return (
    <tr className="hover:bg-gray-100">
      {/* Kolumna: Imię i nazwisko */}
      <td className="border p-2 h-12 align-middle max-w-xs">
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-1 rounded w-full min-w-[120px] max-w-[240px]"
          />
        ) : (
          <span className="inline-block truncate w-full max-w-[240px]">
            {client.name}
          </span>
        )}
      </td>

      {/* Kolumna: Telefon */}
      <td className="border p-2 h-12 align-middle max-w-xs">
        {isEditing ? (
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-1 rounded w-full min-w-[120px] max-w-[180px]"
          />
        ) : (
          <span className="inline-block truncate w-full max-w-[180px]">
            {client.phone}
          </span>
        )}
      </td>

      {/* Kolumna: Akcje */}
      <td className="border p-2 h-12 align-middle w-48">
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={save}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              >
                Zapisz
              </button>
              <button
                onClick={cancel}
                className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
              >
                Anuluj
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
              >
                Edytuj
              </button>
              <button
                onClick={() => onRemove(client.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Usuń
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}
