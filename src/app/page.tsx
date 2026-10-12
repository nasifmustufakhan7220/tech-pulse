
import { Suspense } from "react";
import Header from "../components/Navbar/Header";
import Marquee from "@/components/Marquee/Marquee";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
        <Header/>
      </Suspense>
      <Suspense fallback={<p>Loading....</p>}>
        <Marquee/>
      </Suspense>
    </div>
  );
}
