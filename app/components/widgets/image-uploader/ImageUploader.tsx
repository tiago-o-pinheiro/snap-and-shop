"use client";

import React, { useState, useRef } from "react";

import { Camera, Upload, X, Search } from "lucide-react";
import { Button } from "../../ui/button/Button";
import { Card } from "../../ui/card/Card";

interface ImageUploadProps {
  onImageSelected: (file: File) => void;
  onAnalyze: () => void;
  isAnalyzing?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelected,
  onAnalyze,
  isAnalyzing = false,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onImageSelected(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (cameraInputRef.current) cameraInputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="p-8 bg-gradient-card shadow-card border-0">
        {!selectedImage ? (
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
              dragActive
                ? "border-primary bg-primary-glow/20 scale-105"
                : "border-border hover:border-primary/50 hover:bg-gradient-subtle"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-gradient-primary">
                <Upload className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Upload or take a photo
                </h3>
                <p className="text-muted-foreground mb-4">
                  Drag & drop an image here, or click to select
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="hero"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6"
                >
                  <Upload className="w-4 h-4" />
                  Choose File
                </Button>
                <Button
                  variant="camera"
                  onClick={() => cameraInputRef.current?.click()}
                  className="px-6"
                >
                  <Camera className="w-4 h-4" />
                  Take Photo
                </Button>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files?.[0] && handleImageChange(e.target.files[0])
              }
              className="hidden"
            />
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) =>
                e.target.files?.[0] && handleImageChange(e.target.files[0])
              }
              className="hidden"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden bg-muted">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-64 object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={clearImage}
                className="absolute top-2 right-2 bg-background/80 hover:bg-background"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={onAnalyze}
                disabled={isAnalyzing}
                className="px-8"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Find Similar Products
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
