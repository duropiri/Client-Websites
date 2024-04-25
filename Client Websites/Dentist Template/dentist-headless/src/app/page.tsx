import Header from "@/components/header";
import Banner from "@/components/banner"
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col min-w-screen ">
      <Banner />
      <Header/>
      <Hero />
    </main>
  );
}
