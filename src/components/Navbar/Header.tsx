import { ICategory } from "@/Types/Tech.types";
import Image from "next/image";
import { Suspense } from "react";
import DisplayTime from "./DisplayTime";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = async () => {
  const res = await fetch(
    "https://better-auth-backend-kappa.vercel.app/api/categories",
    { next: { revalidate: 60 } },
  );
  const data: ICategory[] = await res.json();
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="mx-auto max-w-6xl">
        <div className="navbar">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                
              >
                <Link className='text-[#45556c] font-semibold text-[16px] hover:text-[#4f39f6] cursor-pointer ml-10' href={`/`}>Home</Link>
                {data.map((link) => (

                    <NavLinks key={link._id} link={link} />

                ))}
              </ul>
            </div>
            <div className="flex h-auto min-h-0 gap-2 px-3 py-2 text-left">
              <Image
                className="rounded"
                src="/Headerlogo.avif"
                alt="logo"
                width={50}
                height={50}
              />

              <div className="flex flex-col items-start justify-center gap-0.5">
                <p className="text-xl font-bold leading-tight tracking-tight text-[#8723fa] ">
                  TechPulse
                </p>

                <div className="text-xs font-medium leading-tight text-base-content/60">
                  <Suspense fallback={<p>Loading...</p>}>
                    <DisplayTime />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ml-16">
              <Link className='text-[#45556c] font-semibold text-[16px] hover:text-[#4f39f6] cursor-pointer' href={`/`}>Home</Link>
              {data.map((link) => (

                  <NavLinks key={link._id}  link={link} />

              ))}
            </ul>
          </div>
          <div className="navbar-end flex gap-3 items-center">
            <div className="flex gap-2 items-center bg-[#ecfdf5] py-1 px-5 border border-[#a4f4cf] rounded-2xl ">
              <p className="text-[#00bd7e] text-[18px]">●</p>
              <p className="text-[#007a55] font-semibold">Live</p>
            </div>
            <Link href={`/sing-in`} className="btn bg-[#4f39f6] text-[white] text-[16px]">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
