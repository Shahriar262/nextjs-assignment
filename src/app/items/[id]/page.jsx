import { notFound } from "next/navigation";
import Image from "next/image";
import {
  FiCpu,
  FiMonitor,
  FiHardDrive,
  FiWatch,
  FiTrendingUp,
} from "react-icons/fi";

const fetchItemById = async (id) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/data/items.json`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const items = await res.json();
  return items.find((item) => item.id === Number(id));
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = await fetchItemById(id);

  return {
    title: item ? item.name : "Item Not Found",
  };
}

export default async function ItemPage({ params }) {
  const { id } = await params;
  const item = await fetchItemById(id);

  if (!item) return notFound();

  return (
    <main className="bg-gray-300 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 mt-10 md:px-0">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative w-full h-[320px] md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="md:object-cover object-fill"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {item.name}
            </h1>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
            <p className="text-2xl font-semibold text-blue-600">
              ${item.price}
            </p>

            {/* Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {item.cpu && (
                <div className="flex items-center gap-2">
                  <FiCpu className="text-blue-600" /> {item.cpu}
                </div>
              )}
              {item.display && (
                <div className="flex items-center gap-2">
                  <FiMonitor className="text-blue-600" /> {item.display}
                </div>
              )}
              {item.storage && (
                <div className="flex items-center gap-2">
                  <FiHardDrive className="text-blue-600" /> {item.storage}
                </div>
              )}
              {item.ram && (
                <div className="flex items-center gap-2">
                  <FiTrendingUp className="text-blue-600" /> {item.ram}
                </div>
              )}
              {item.warranty && (
                <div className="flex items-center gap-2">
                  <FiWatch className="text-blue-600" /> Warranty:{" "}
                  {item.warranty}
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Key Highlights
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {item.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Optional extra specs */}
            {item.brand || item.os || item.graphics ? (
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Technical Details
                </h2>
                <ul className="list-inside text-gray-700 space-y-1">
                  {item.brand && (
                    <li>
                      <strong>Brand:</strong> {item.brand}
                    </li>
                  )}
                  {item.os && (
                    <li>
                      <strong>Operating System:</strong> {item.os}
                    </li>
                  )}
                  {item.graphics && (
                    <li>
                      <strong>Graphics:</strong> {item.graphics}
                    </li>
                  )}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
