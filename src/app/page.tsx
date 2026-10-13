
import { Suspense } from "react";
import Header from "../components/Navbar/Header";
import Marquee from "@/components/Marquee/Marquee";
import HomeSection from "@/components/Home/HomeSection";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
        <Header/>
      </Suspense>
      <Suspense fallback={<p>Loading....</p>}>
        <Marquee/>
      </Suspense>
      <HomeSection/>
    </div>
  );
}
