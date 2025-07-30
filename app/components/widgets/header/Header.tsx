import { Camera, Search, Heart, Users } from "lucide-react";
import { Button } from "../../ui/button/Button";

export const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Camera className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Snap & Shop
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <Search className="w-4 h-4 mr-2" />
              Discover
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <Users className="w-4 h-4 mr-2" />
              Community
            </Button>
            <Button variant="default">Sign In</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
