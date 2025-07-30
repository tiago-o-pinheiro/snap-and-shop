import heroImage from "../../../assets/images/hero-image.jpg";

export const HeroBanner = () => (
  <>
    <div className="mb-8">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          Snap
        </span>{" "}
        a Photo,{" "}
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          Shop
        </span>{" "}
        the Look
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
        Find and buy the products you love with AI-powered visual search.
        <br />
        Discover similar items across Amazon and SHEIN instantly.
      </p>
    </div>
    <div className="mb-12 relative">
      <div className="rounded-2xl overflow-hidden shadow-elegant mx-auto max-w-2xl">
        <img
          src={heroImage.src}
          alt="Snap & Shop Hero"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>
    </div>
  </>
);
