
import { Suspense } from "react";
import Marquee from "@/components/Marquee/Marquee";
import HomeSection from "@/components/Home/HomeSection";

export default function Home() {
  return (
    <div>
      
      <Suspense fallback={<p>Loading....</p>}>
        <Marquee/>
      </Suspense>
      <HomeSection/>
    </div>
  );
}
