import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to CreatorList 🚀</h1>
      <p className="text-gray-600 mb-6">Your platform to fund your favorite creators.</p>

      <div className="space-x-4">
        <Link href="/discover"><button className="bg-black text-white px-4 py-2 rounded-xl">🔍 Discover</button></Link>
        <Link href="/campaign/new"><button className="bg-blue-600 text-white px-4 py-2 rounded-xl">➕ Create Campaign</button></Link>
        <Link href="/roi"><button className="bg-green-600 text-white px-4 py-2 rounded-xl">📈 My ROI</button></Link>
        <Link href="/notifications"><button className="bg-yellow-500 text-white px-4 py-2 rounded-xl">🔔 Notifications</button></Link>
        <Link href="/admin"><button className="bg-red-500 text-white px-4 py-2 rounded-xl">🛠 Admin</button></Link>
      </div>
    </div>
  );
}
