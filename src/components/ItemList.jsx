"use client";

import { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";
import ItemSkeleton from "@/components/ItemSkeleton";

export default function ItemListPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/items.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-0 lg:px-0 py-12">
      <div className="text-gray-600 text-[19px] md:text-[21px] font-medium mb-4">
        Total {items.length} Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <ItemSkeleton key={i} />)
          : items.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    </main>
  );
}
