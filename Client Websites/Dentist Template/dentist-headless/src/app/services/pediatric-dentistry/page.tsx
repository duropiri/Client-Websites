"use client";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Body from "@/components/layouts/body";
import Footer from "@/components/footer";
import { SizeProvider } from "@/contexts/sizeContext";

export default function Page() {
  return (
    <main className="flex flex-col min-w-screen">
      <SizeProvider>
        <Body pageTitle="Pediatric Dentistry"/>
      </SizeProvider>
    </main>
  );
}
