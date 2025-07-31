import { Badge } from "@/app/components/ui/badge/Badge";
import { Button } from "@/app/components/ui/button/Button";
import { Card } from "@/app/components/ui/card/Card";
import { Heart, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CardResultProps = {
  product: {
    id: string;
    title: string;
    image: string;
    brand: string;
    rating: number;
    reviews: number;
    price: string;
    originalPrice?: string;
    freeShipping: boolean;
    platform: "amazon" | "shein";
    discount?: string;
  };
  index: number;
};

const platformColors = {
  amazon: "bg-orange-500",
  shein: "bg-pink-500",
};

const platformNames = {
  amazon: "Amazon",
  shein: "SHEIN",
};

export const CardResult = ({ product, index }: CardResultProps) => {
  const router = useRouter();
  const [wishlistedItems, setWishlistedItems] = useState<string[]>([]);

  const handleWishlist = (productId: string) => {
    setWishlistedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <Card
      key={product.id}
      className="group overflow-hidden bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-elegant hover:scale-105 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <Badge
          className={`absolute top-2 left-2 ${
            platformColors[product.platform]
          } text-white border-0`}
        >
          {platformNames[product.platform]}
        </Badge>

        {product.discount && (
          <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground border-0">
            {product.discount} OFF
          </Badge>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            handleWishlist(product.id);
          }}
          className={`absolute bottom-2 right-2 bg-background/80 hover:bg-background transition-all duration-300 ${
            wishlistedItems.includes(product.id)
              ? "text-accent hover:text-accent"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${
              wishlistedItems.includes(product.id) ? "fill-current" : ""
            }`}
          />
        </Button>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
          <h3 className="font-semibold line-clamp-2 text-sm leading-tight">
            {product.title}
          </h3>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <div className="flex items-center">
            <Star className="w-3 h-3 fill-current text-yellow-400" />
            <span className="ml-1 text-muted-foreground">{product.rating}</span>
          </div>
          <span className="text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-primary">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {product.freeShipping && (
          <Badge variant="secondary" className="text-xs">
            Free Shipping
          </Badge>
        )}
      </div>
    </Card>
  );
};
