import Header from "@/components/header";
import Banner from "@/components/banner";
import Body from "@/components/body";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-w-screen">
      <div className="z-50">
        <Banner />
        <Header />
      </div>

      <Body />
      <Footer />
    </main>
  );
}
