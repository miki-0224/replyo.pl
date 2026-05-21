import { BrandMarquee } from "./_components/BrandMarquee";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Navigation } from "./_components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative flex-1">
        <Hero />
        <BrandMarquee />
      </main>
      <Footer />
    </>
  );
}
