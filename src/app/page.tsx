import { JSX } from "react/jsx-dev-runtime";
import UserList from "../components/user-list";

// Fungsi delay
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function HomePage(): Promise<JSX.Element> {
  // Simulasi loading dari server selama 2 detik
  await delay(3000);

  const users = [
    { id: 1, name: "Alya", email: "alya@example.com" },
    { id: 2, name: "Budi", email: "budi@example.com" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Pengguna</h1>
      <UserList users={users} />
    </main>
  );
}
