import ItemList from "@/components/ItemList";

export const metadata = {
  title: "Items",
  description:
    "TechHive is an IT products showcase project built with Next.js and Tailwind CSS",
};

export default function ItemsPage({}) {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-0 py-20 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mt-10 text-center text-gray-900">
        Our Products
      </h1>
      <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
        Explore our range of high-quality products designed for professionals,
        gamers, and tech enthusiasts alike. Each item is carefully selected to
        ensure performance, reliability, and value.
      </p>

      <ItemList />
    </main>
  );
}
