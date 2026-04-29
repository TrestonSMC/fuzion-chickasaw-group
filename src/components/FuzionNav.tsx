"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "../config/brand";

const navItems = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/company", label: "Company", hasDropdown: true },
  { href: "/news", label: "News" },
  { href: "/social-responsibility", label: "Social Responsibility" },
  { href: "/careers", label: "Careers" },
];

export default function FuzionNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-black/10 bg-[#F6F3EC]/95 shadow-sm backdrop-blur-md"
          : "border-black/5 bg-[#F6F3EC]/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between lg:h-[84px]">
          <Link href="/" aria-label="Home" className="inline-flex shrink-0">
            <img
              src={BRAND.logo}
              alt={BRAND.name}
              className="h-[72px] w-auto sm:h-[82px] lg:h-[100px]"
            />
          </Link>

          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-[14px] font-semibold text-[#1A1A1A]/85 transition hover:text-[#4B1E6D]"
                    >
                      {item.label}
                      <span className="text-[11px] text-[#C9A24D]">▾</span>
                    </Link>

                    <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                      <div className="rounded-2xl border border-[#4B1E6D]/20 bg-white p-2 shadow-lg">
                        <Link
                          href="/company/principal-advisors"
                          className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#1A1A1A]/75 transition hover:bg-[#F6F3EC] hover:text-[#4B1E6D]"
                        >
                          Principal Advisors
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[14px] font-semibold text-[#1A1A1A]/85 transition hover:text-[#4B1E6D]"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="hidden lg:block lg:w-[72px]" />

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#4B1E6D]/20 bg-white text-[#4B1E6D] shadow-sm lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`${mobileOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="border-t border-[#4B1E6D]/10 bg-[#F6F3EC] px-4 pb-5 pt-3">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-semibold text-[#1A1A1A] transition hover:text-[#4B1E6D]"
              >
                {item.label}
              </Link>

              {item.hasDropdown && (
                <Link
                  href="/company/principal-advisors"
                  onClick={() => setMobileOpen(false)}
                  className="block pb-3 pl-4 text-sm font-medium text-[#4B1E6D]"
                >
                  Principal Advisors
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

