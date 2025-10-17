import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to Finote 💰
        </h1>
      </main>
    </div>
  );
}
