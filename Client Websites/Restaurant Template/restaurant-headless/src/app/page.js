import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <Navbar />

      {/* Body Section w/ Hero */}
      <Hero />

      <Body />

      {/* Spacer div to ensure Footer is pushed to the bottom on short pages */}
      <div className="flex-1"></div>

      {/* <div className="mt-[-100svh]">
      <div aria-hidden="true" className="h-svh relative pointer-events-none"></div>
        <section className="flex flex-col w-full min-h-[100vh] justify-between sticky bottom-[-40%] z-[-1]"> */}
      <footer className="sticky bottom-0 -mt-[200px] z-[9]">
        <Footer />
      </footer>
      {/* </section>
      </div> */}
    </main>
  );
}
