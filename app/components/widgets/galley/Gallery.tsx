import { Product } from "@/app/types/product.type";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Gallery = ({ images }: { images: Product["images"] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col items-center space-y-4 max-w-screen-lg mx-auto">
        <div className="relative w-full">
          <button
            onClick={prevProduct}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
          >
            <ChevronLeft />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full max-h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-500"
          />
          <button
            onClick={nextProduct}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <div className="flex space-x-2 w-max">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 p-1 border-2 rounded-md shrink-0 ${
                  currentIndex === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
