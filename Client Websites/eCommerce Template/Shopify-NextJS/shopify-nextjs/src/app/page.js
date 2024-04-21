import HeroSection from "@/components/HeroSection";
import BannerDetailSection from "@/components/BannerDetailSection";
import NavbarSection from "@/components/NavbarSection";
import ProductSection from "@/components/ProductSection";
import CategorySection from "@/components/CategorySections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavbarSection />
      <div className="-mt-[110px]">
        <HeroSection />
      </div>
      <BannerDetailSection />
      <CategorySection />
      <ProductSection />
    </main>
  );
}
