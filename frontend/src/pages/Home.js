function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Witaj w naszej aplikacji</h1>
      <p className="text-lg mb-6">Tutaj możesz umówić wizytę bez logowania.</p>
      <a
        href="/login"
        className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Zaloguj się jako Admin
      </a>
    </div>
  );
}

export default Home;
