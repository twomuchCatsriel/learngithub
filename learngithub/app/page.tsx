import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col h-screen bg-gray-700 text-white">
        <h1 className="text-4xl font-bold">Velkommen til GitHub</h1>
        <h2 className="text-xl">For Nybegynnere</h2>

        <Link href={"/learn"} className="border p-2 rounded-xl mt-20 bg-gray-800 hover:bg-gray-900">Start å Lære</Link>
      </div>
    </div>
  )
}
