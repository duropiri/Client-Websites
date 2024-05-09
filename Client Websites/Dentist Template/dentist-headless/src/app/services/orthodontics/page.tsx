"use client";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import { SizeProvider } from "@/contexts/sizeContext";
import Body from "@/components/layouts/body";

export default function Page() {
  return (
    <main className="flex flex-col min-w-screen">
      <SizeProvider>
        <Body pageTitle="Orthodontics" />
      </SizeProvider>
    </main>
  );
}
