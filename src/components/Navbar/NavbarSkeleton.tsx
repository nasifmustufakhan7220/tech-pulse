const NavbarSkeleton = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[84px] max-w-[1140px] animate-pulse items-center justify-between gap-6 px-4">
        {/* Logo and Brand */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Logo */}
          <div className="h-[57px] w-[50px] rounded bg-gray-200" />

          {/* Brand name and date */}
          <div className="flex flex-col gap-2">
            <div className="h-5 w-[88px] rounded bg-gray-200" />
            <div className="flex flex-col gap-1">
              <div className="h-3 w-[130px] rounded bg-gray-200" />
              <div className="h-3 w-[38px] rounded bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {/* Home */}
          <div className="h-4 w-10 rounded bg-gray-200" />

          {/* CPU */}
          <div className="h-4 w-12 rounded bg-gray-200" />

          {/* GPU */}
          <div className="h-4 w-12 rounded bg-gray-200" />

          {/* Phone */}
          <div className="h-4 w-14 rounded bg-gray-200" />

          {/* Accessories */}
          <div className="h-4 w-20 rounded bg-gray-200" />

          {/* Laptop */}
          <div className="h-4 w-14 rounded bg-gray-200" />

          {/* Monitor */}
          <div className="h-4 w-16 rounded bg-gray-200" />
        </nav>

        {/* Actions */}
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          {/* Live badge */}
          <div className="flex h-9 w-[89px] items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-100">
            <div className="h-2 w-2 rounded-full bg-gray-300" />
            <div className="h-3 w-7 rounded bg-gray-300" />
          </div>

          {/* Sign In button */}
          <div className="h-[38px] w-[83px] rounded-sm bg-gray-200" />
        </div>

        {/* Mobile menu placeholder */}
        <div className="h-8 w-8 rounded bg-gray-200 sm:hidden" />
      </div>
    </header>
  );
};

export default NavbarSkeleton;