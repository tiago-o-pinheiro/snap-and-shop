"use client";
import { Camera, Heart, Search, Users } from "lucide-react";
import { Header } from "./components/widgets/header/Header";
import { HeroBanner } from "./components/widgets/hero-banner/HeroBanner";
import { ImageUpload } from "./components/widgets/image-uploader/ImageUploader";
import { useState } from "react";

const Home = () => {
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageSelected = (file: File) => {
    console.log("Image selected:", file.name);
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
    // Navigate to search results instead of showing inline results
    window.location.href = "/search?q=uploaded-image";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <HeroBanner />

            {/* Hero Image */}

            {/* Upload Section */}
            <div className="mb-16">
              <ImageUpload
                onImageSelected={handleImageSelected}
                onAnalyze={handleAnalyze}
                isAnalyzing={isAnalyzing}
              />
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card">
                <div className="p-3 rounded-full bg-gradient-primary w-fit mx-auto mb-4">
                  <Camera className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Snap Any Product</h3>
                <p className="text-muted-foreground">
                  Take a photo or upload an image of any item you want to find
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card">
                <div className="p-3 rounded-full bg-gradient-primary w-fit mx-auto mb-4">
                  <Search className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  AI-Powered Search
                </h3>
                <p className="text-muted-foreground">
                  Our smart AI analyzes your image and finds similar products
                  instantly
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card">
                <div className="p-3 rounded-full bg-gradient-primary w-fit mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Save & Share</h3>
                <p className="text-muted-foreground">
                  Build wishlists and share your finds with the community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {/* {showResults && (
        <section className="py-16 px-4">
          <ProductGrid isVisible={showResults} />
        </section>
      )} */}

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Camera className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              Snap & Shop
            </span>
          </div>
          <p className="text-muted-foreground">
            Discover, shop, and share the products you love
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
