import Image from "next/image";
import Body from "@/components/layouts/home/Body";
import Navbar from "@/components/significo/navbar";
import Burger from "@/components/significo/burger";
import Loader from "@/components/significo/loader";
import Home1 from "@/components/significo/home";
import Banner from "@/components/significo/banner";
import IconCards from "@/components/significo/iconCards";
import HorizontalStats from "@/components/significo/horizontalStats";
import TeamSection from "@/components/significo/teamSection";
import Testimonials from "@/components/significo/testimonials";

export default function Home() {
  return (
    <main className="">
      <Body />
      {/* <Navbar />
      <Burger />
      <Loader />
      <Banner />
      <Home1 />
      <IconCards />
      <HorizontalStats />
      <TeamSection />
      <Testimonials /> */}
    </main>
  );
}
