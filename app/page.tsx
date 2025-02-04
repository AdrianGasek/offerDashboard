"use client";
import { useState } from "react";
import productsData from "@/public/data/response_products.json";
import OfferItem from "@/components/OfferItem/OfferItem";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const products = productsData.data || [];
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 container mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Dedykowane oferty</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <OfferItem key={product.id} product={product} />
          ))
        ) : (
          <p>Brak dostępnych produktów</p>
        )}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          ←
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
}