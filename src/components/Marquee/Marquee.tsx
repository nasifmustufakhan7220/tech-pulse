import { IProducts } from "@/Types/Tech.types";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://better-auth-backend-kappa.vercel.app/api/products",
    { cache: "force-cache" },
  );

  const data: IProducts[] = await res.json();
  console.log(data);
  return (
    <div>
      <MarqueeText direction="right">
        {data.map((mar) => (
          <div key={mar._id}>
            <p>{mar.name}</p>
            <p>{mar.currentPrice}</p>
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
