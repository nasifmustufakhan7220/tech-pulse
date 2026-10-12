
import { Suspense } from "react";
import Header from "../components/Navbar/Header";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
        <Header/>
      </Suspense>
    </div>
  );
}
