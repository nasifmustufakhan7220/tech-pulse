
import { Suspense } from "react";
import Marquee from "@/components/Marquee/Marquee";
import HomeSection from "@/components/Home/HomeSection";
import MarqueeSkeleton from "@/components/Marquee/MarqueeSkeleton";

export default function Home() {
  return (
    <div>
      
      <Suspense fallback={<MarqueeSkeleton/>}>
        <Marquee/>
      </Suspense>
      <HomeSection/>
    </div>
  );
}
