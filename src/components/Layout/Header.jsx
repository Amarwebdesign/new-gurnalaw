"use client";
import {Menu, X, ChevronDown} from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { name: "About", href: "/about" },
  {
    name: "Practice Areas",
    href: "/practice-areas",
    widthClass: "w-64",
    children: [
      { name: "Judicial Reviews", href: "/judicial-reviews" },
      { name: "Immigration Appeals", href: "/immigration-appeals" },
      { name: "IRCC Applications", href: "/ircc-applications" },
      { name: "Refugee Claims and Appeals", href: "/refugee-claims-and-appeals" },
      { name: "ID Hearings", href: "/id-hearings" },
      { name: "Visa Refusal", href: "/visa-refusal-lawyer" },
      { name: "Citizenship Lawyer", href: "/citizenship-lawyer" },
      { name: "Notary Public", href: "/notary-public" },
    ],
  },
  {
    name: "Locations",
    href: "/locations",
    widthClass: "w-52",
    children: [
      { name: "Surrey", href: "/immigration-lawyer-in-surrey" },
      { name: "Abbotsford", href: "/immigration-lawyer-in-abbotsford" },
      { name: "Vancouver", href: "/immigration-lawyer-in-vancouver" },
      { name: "Coquitlam", href: "/immigration-lawyer-in-coquitlam" },
      { name: "Burnaby", href: "/immigration-lawyer-in-burnaby" },
      { name: "Langley", href: "/immigration-lawyer-in-langley" },
      { name: "Richmond", href: "/immigration-lawyer-in-richmond" },
    ],
  },
  { name: "Media", href: "/media" },
  { name: "News", href: "/canada-immigration-news" },
  { name: "BC PNP Calculator", href: "/bc-pnp-points-calculator-canada" },
];

const navStyles = {
  desktopList: "hidden xl:flex items-center space-x-7 lg:space-x-8",
  desktopLink:
    "inline-flex items-center text-gray-200 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium",
  desktopDropdown:
    "absolute left-0 top-full z-50 mt-4 overflow-hidden rounded-md border border-gray-100 bg-white py-2 opacity-0 invisible shadow-xl transition-all duration-300 group-hover:visible group-hover:mt-0 group-hover:opacity-100",
  desktopSubLink:
    "block px-5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#C8102E]",
  mobileList: "space-y-1",
  mobileGroupRow: "flex items-center gap-2",
  mobileLink:
    "block rounded-md px-3 py-3 text-white transition-colors hover:bg-gray-800",
  mobileToggle:
    "flex items-center justify-center rounded-md px-3 py-3 text-white transition-colors hover:bg-gray-800",
  mobileSubList: "space-y-1 pb-2 pl-6",
  mobileSubLink:
    "block rounded-md px-3 py-2.5 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white",
};

function HeaderNavLink({ href, name, mobile = false, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={mobile ? navStyles.mobileLink : navStyles.desktopLink}
    >
      {name}
      {children}
    </Link>
  );
}

function HeaderSubLink({ href, name, mobile = false, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={mobile ? navStyles.mobileSubLink : navStyles.desktopSubLink}
    >
      {name}
    </Link>
  );
}

function HeaderNavigation({ mobile = false, onNavigate }) {
  const [openGroup, setOpenGroup] = useState(null);

  if (mobile) {
    return (
      <div className={navStyles.mobileList}>
        {navigationItems.map((item) => {
          if (!item.children) {
            return (
              <HeaderNavLink
                key={item.name}
                href={item.href}
                name={item.name}
                mobile
                onClick={onNavigate}
              />
            );
          }

          const isOpen = openGroup === item.name;

          return (
            <div key={item.name}>
              <div className={navStyles.mobileGroupRow}>
                <div className="flex-1">
                  <HeaderNavLink
                    href={item.href}
                    name={item.name}
                    mobile
                    onClick={onNavigate}
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setOpenGroup((current) => (current === item.name ? null : item.name))
                  }
                  className={navStyles.mobileToggle}
                  aria-label={`Toggle ${item.name} menu`}
                  aria-expanded={isOpen}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {isOpen ? (
                <div className={navStyles.mobileSubList}>
                  {item.children.map((child) => (
                    <HeaderSubLink
                      key={child.href}
                      href={child.href}
                      name={child.name}
                      mobile
                      onClick={onNavigate}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={navStyles.desktopList}>
      {navigationItems.map((item) => {
        if (!item.children) {
          return <HeaderNavLink key={item.name} href={item.href} name={item.name} />;
        }

        return (
          <div key={item.name} className="group relative py-2">
            <HeaderNavLink href={item.href} name={item.name}>
              <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
            </HeaderNavLink>
            <div className={`${navStyles.desktopDropdown} ${item.widthClass}`}>
              {item.children.map((child) => (
                <HeaderSubLink key={child.href} href={child.href} name={child.name} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#1A2530] py-3 shadow-lg"
          : "bg-[#1A2530]/90 py-5 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex h-10 w-[180px] flex-shrink-0 items-center md:h-12 md:w-[220px]"
            aria-label="Gurna Law Home"
          >
            <Image height={30} width={200} src='images/svg/logo-white.svg' className='logo w-full' alt='Gurna Law Coroporation'/>
          </Link>

          <HeaderNavigation />

          <div className="hidden xl:flex">
            <Link
              href="/contact"
              className="flex items-center rounded-sm bg-[#C8102E] px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#A00D24]"
            >
               Book a consultation
            </Link>
          </div>

          <div className="flex items-center xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="text-white transition-colors hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="absolute left-0 max-h-[85vh] w-full overflow-y-auto border-t border-gray-700 bg-[#1A2530] shadow-xl xl:hidden">
          <div className="space-y-1 px-4 pb-6 pt-2">
            <HeaderNavigation mobile onNavigate={() => setMobileMenuOpen(false)} />
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 block rounded-md bg-[#C8102E] px-3 py-3 text-center text-sm font-medium uppercase tracking-wider text-white"
            >
               Book a consultation
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
