// app/search/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // <-- Import hooks from next/navigation

import {
  Camera,
  Search,
  Filter,
  SlidersHorizontal,
  Heart,
  Star,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../components/ui/button/Button";
import { Card } from "../components/ui/card/Card";
import { Badge } from "../components/ui/badge/Badge";
import { CardResult } from "./components/card-result/CardResult";

// NOTE: In a real app, this data would be fetched from an API
const mockProducts = [
  {
    id: "1",
    title: "Wireless Bluetooth Headphones with Active Noise Cancellation",
    price: "$89.99",
    originalPrice: "$129.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    rating: 4.5,
    reviews: 2453,
    platform: "amazon" as const,
    discount: "30%",
    freeShipping: true,
    brand: "SoundTech",
    category: "Electronics",
  },
  {
    id: "2",
    title: "Trendy Oversized Sunglasses - UV Protection",
    price: "$12.99",
    originalPrice: "$24.99",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    rating: 4.2,
    reviews: 867,
    platform: "shein" as const,
    discount: "48%",
    freeShipping: false,
    brand: "StyleMax",
    category: "Accessories",
  },
  {
    id: "3",
    title: "Minimalist Gold Chain Necklace - 18k Gold Plated",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
    rating: 4.7,
    reviews: 1203,
    platform: "shein" as const,
    freeShipping: true,
    brand: "GoldLux",
    category: "Jewelry",
  },
  {
    id: "4",
    title: "Smart Fitness Watch with Heart Rate Monitor & GPS",
    price: "$159.99",
    originalPrice: "$199.99",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&h=600&fit=crop",
    rating: 4.4,
    reviews: 3421,
    platform: "amazon" as const,
    discount: "20%",
    freeShipping: true,
    brand: "FitPro",
    category: "Electronics",
  },
  {
    id: "5",
    title: "Vintage Style Leather Crossbody Bag - Genuine Leather",
    price: "$28.99",
    originalPrice: "$45.99",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    rating: 4.3,
    reviews: 945,
    platform: "shein" as const,
    discount: "37%",
    freeShipping: false,
    brand: "VintageVibe",
    category: "Bags",
  },
  {
    id: "6",
    title: "Ceramic Plant Pot Set with Drainage - Set of 3",
    price: "$34.99",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
    rating: 4.6,
    reviews: 567,
    platform: "amazon" as const,
    freeShipping: true,
    brand: "GreenHome",
    category: "Home & Garden",
  },
  {
    id: "7",
    title: "Wireless Phone Charger Stand - Fast Charging",
    price: "$24.99",
    originalPrice: "$39.99",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop",
    rating: 4.1,
    reviews: 1876,
    platform: "amazon" as const,
    discount: "38%",
    freeShipping: true,
    brand: "ChargeTech",
    category: "Electronics",
  },
  {
    id: "8",
    title: "Boho Style Maxi Dress - Floral Print",
    price: "$22.99",
    originalPrice: "$35.99",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop",
    rating: 4.0,
    reviews: 654,
    platform: "shein" as const,
    discount: "36%",
    freeShipping: false,
    brand: "BohoChic",
    category: "Clothing",
  },
];

export const SearchPage = () => {
  const router = useRouter();
  const [filterPlatform, setFilterPlatform] = useState("all");

  const filteredProducts = mockProducts.filter((product) => {
    if (filterPlatform === "all") return true;
    return product.platform === filterPlatform;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/")} // <-- Use router.push
                className="hover:bg-accent"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Camera className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Snap & Shop
                </span>
              </div>
            </div>
            {/* ... other header elements */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Info & Filters */}
        <div className="mb-8">{/* ... your filter and sort UI */}</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <CardResult key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
