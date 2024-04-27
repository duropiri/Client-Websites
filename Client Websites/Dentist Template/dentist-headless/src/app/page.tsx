"use client";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Body from "@/components/body";
import Footer from "@/components/footer";
import { SizeProvider } from "@/contexts/sizeContext";

export default function Home() {
  return (
    <main className="flex flex-col min-w-screen">
      <SizeProvider>
        <div className="z-50">
          <Banner />
          <Header />
        </div>

        <Body />
        <Footer />
      </SizeProvider>
    </main>
  );
}
