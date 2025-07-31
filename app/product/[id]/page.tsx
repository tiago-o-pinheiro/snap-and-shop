// app/product/[id]/page.tsx
"use client"; // This directive must be at the top

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ExternalLink,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Button } from "@/app/components/ui/button/Button";
import { Card } from "@/app/components/ui/card/Card";
import { Badge } from "@/app/components/ui/badge/Badge";
import { Gallery } from "@/app/components/widgets/galley/Gallery";
import { Product } from "@/app/types/product.type";

// NOTE: In a real app, this data would come from a database or API
const mockProductDetails: Record<string, Product> = {
  "1": {
    id: "1",
    title: "Wireless Bluetooth Headphones with Active Noise Cancellation",
    price: "$89.99",
    originalPrice: "$129.99",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
    ],
    rating: 4.5,
    reviews: 2453,
    platform: "amazon" as const,
    discount: "30%",
    brand: "SoundTech",
    category: "Electronics",
    description:
      "Experience premium sound quality with these wireless Bluetooth headphones featuring active noise cancellation technology. Perfect for travel, work, or everyday listening.",
    features: [
      "Active Noise Cancellation (ANC)",
      "Up to 30 hours battery life",
      "Quick charge: 5 minutes = 2 hours playback",
      "Premium drivers for rich sound",
      "Comfortable over-ear design",
      "Built-in microphone for calls",
    ],
    specifications: {
      "Battery Life": "Up to 30 hours with ANC off, 20 hours with ANC on",
      Connectivity: "Bluetooth 5.0, 3.5mm aux cable",
      Weight: "250g",
      "Frequency Response": "20Hz - 20kHz",
      Impedance: "32 ohms",
      "Driver Size": "40mm",
    },
    inStock: true,
    freeShipping: true,
  },
  // ... other mock products
};

const similarProducts = [
  {
    id: "2",
    title: "Trendy Oversized Sunglasses",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4.2,
    platform: "shein" as const,
  },
  {
    id: "3",
    title: "Minimalist Gold Chain Necklace",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    rating: 4.7,
    platform: "shein" as const,
  },
  {
    id: "4",
    title: "Smart Fitness Watch",
    price: "$159.99",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop",
    rating: 4.4,
    platform: "amazon" as const,
  },
  {
    id: "5",
    title: "Vintage Leather Crossbody Bag",
    price: "$28.99",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.3,
    platform: "shein" as const,
  },
];
// This is a Server Component by default
export const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = mockProductDetails[id as keyof typeof mockProductDetails];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        </div>
      </div>
    );
  }

  // Pass server-fetched data to the client component
  return (
    <ProductDetailsClient product={product} similarProducts={similarProducts} />
  );
};

const ProductDetailsClient = ({
  product,
  similarProducts,
}: {
  product: Product;
  similarProducts: any[];
}) => {
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const platformNames = {
    amazon: "Amazon",
    shein: "SHEIN",
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="hover:bg-accent"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            {/* ... other header elements */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <Gallery images={product.images} />

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">
                  {product.brand}
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-current text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium">
                    {product.rating}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-primary">
                {product.price}
              </span>
              {product.originalPrice && (
                <div className="flex flex-col">
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                  <Badge className="bg-accent text-accent-foreground border-0 w-fit">
                    Save {product.discount}
                  </Badge>
                </div>
              )}
            </div>
            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button variant="hero" size="lg" className="flex-1">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-accent border-accent" : ""}
                >
                  <Heart
                    className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
                  />
                </Button>
              </div>

              <Button variant="secondary" size="lg" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on {platformNames[product.platform]}
              </Button>
            </div>
          </div>

          {/* Similar Products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((p, index) => (
                <Card
                  key={`similar-product-${p.id}`}
                  className="group overflow-hidden bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-elegant hover:scale-105 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => router.push(`/product/${p.id}`)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-2 text-sm mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-3 h-3 fill-current text-yellow-400" />
                      <span className="text-sm text-muted-foreground">
                        {product.rating}
                      </span>
                    </div>
                    <span className="font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
