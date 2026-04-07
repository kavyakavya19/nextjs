import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-md">
      
      <h1 className="text-xl font-bold text-yellow-400">
        🚗 Rental
      </h1>

      <div className="flex gap-6 text-gray-300">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <Link href="/vehicles" className="hover:text-yellow-400">Vehicles</Link>
        <Link href="/bookings" className="hover:text-yellow-400">Bookings</Link>
      </div>

    </nav>
  );
}