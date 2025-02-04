import Image from 'next/image';
import Link from 'next/link';
import NotFoundImage from '@/public/images/NotFoundImage.jpg';

interface Media {
  url: string;
}

interface Product {
  id: string;
  name: string;
  media?: Media[];
  reserved?: boolean;
}

export default function OfferItem({ product }: { product: Product }) {
  const imageUrl = product.media && product.media.length > 0 
    ? product.media[0].url 
    : NotFoundImage;

  return (
    <div className="border p-4 rounded-lg shadow-lg flex flex-col h-full">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">
            {product.name.trim() !== "" ? product.name : "Brak nazwy produktu"}
          </h3>
          <div className="flex items-center justify-center">
            <span className="mr-2">Rezerwacja:</span>
            {product.reserved ? (
              <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center">
                <span className="text-green-600">✓</span>
              </div>
            ) : (
              <div className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center">
                <span className="text-red-600">✕</span>
              </div>
            )}
          </div>
        </div>

        <Link 
          href={`/offer/${product.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-center mt-auto"
        >
          Wejdź →
        </Link>
      </div>
    </div>
  );
}