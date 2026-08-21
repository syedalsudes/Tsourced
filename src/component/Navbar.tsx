"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  User, 
  ShoppingBag,
  Menu,
  X,
  ArrowRight
} from "lucide-react";

const announcements = [
  "Buy 2 get 1 Free",
  "Free Shipping on orders over $50",
];

const navLinks = [
  { label: "Hoodies", href: "/hoodies" },
  { label: "Crewneck", href: "/crewneck" },
  { label: "Zipper Hoodies", href: "/zipper-hoodies" },
  { label: "Youth", href: "/youth" },
  { label: "Bottoms", href: "/bottoms" },
  { label: "T-Shirts", href: "/t-shirts" },
  { label: "Bundles", href: "/bundles" },
  { label: "Catalog", href: "/catalog" },
];

export default function Navbar() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % announcements.length);
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR (NORMAL FLOW - SCROLLS AWAY) */}
      <div className="w-full bg-[#f8f9fa] border-b border-navy/10 text-navy py-2 px-4 text-xs font-semibold">
        <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto flex items-center justify-between">
          <button 
            onClick={handlePrev} 
            className="p-1 hover:text-[#FF5A00] transition"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-4 h-4 text-navy" />
          </button>

          <div className="overflow-hidden text-center h-4 flex items-center justify-center">
            <span className="transition-all duration-500 ease-in-out font-medium tracking-wide">
              {announcements[currentIdx]}
            </span>
          </div>

          <button 
            onClick={handleNext} 
            className="p-1 hover:text-[#FF5A00] transition"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-4 h-4 text-navy" />
          </button>
        </div>
      </div>

      {/* 2. MAIN NAVBAR (LOCKED STICKY AT SCREEN TOP) */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-navy/10 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col leading-none group">
              <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-navy">
                T <span className="text-[#FF5A00]">SOURCED</span>
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.22em] text-blue font-bold uppercase mt-0.5">
                Garments & Apparel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[14px] 2xl:text-[15px] text-navy font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#FF5A00] transition-colors whitespace-nowrap py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5A00] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-3.5 sm:gap-6 text-navy">
            {/* Currency Selector */}
            <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:text-[#FF5A00] transition-colors text-xs sm:text-sm font-semibold">
              <span>USD</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>

            {/* Search Icon */}
            <button 
              aria-label="Search" 
              className="p-1 sm:p-1.5 hover:text-[#FF5A00] transition-colors"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* User Account */}
            <button 
              aria-label="User Account" 
              className="hidden sm:inline-flex p-1 sm:p-1.5 hover:text-[#FF5A00] transition-colors"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Cart Button */}
            <button 
              aria-label="Cart" 
              className="relative p-1 sm:p-1.5 hover:text-[#FF5A00] transition-colors"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute -top-0.5 -right-1 bg-[#FF5A00] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-1.5 text-navy hover:text-[#FF5A00] transition"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>
          </div>

        </div>
      </header>

      {/* 3. SLIDE-OVER MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[100] xl:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
        />

        <div
          className={`absolute top-0 right-0 w-[85%] max-w-[380px] h-full bg-white shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-navy/10 flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex flex-col">
              <span className="text-xl font-black text-navy">
                T <span className="text-[#FF5A00]">SOURCED</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full hover:bg-navy/5 text-navy transition"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-4 flex-grow overflow-y-auto space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-[15px] font-bold text-navy hover:text-[#FF5A00] border-b border-navy/5 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-navy/40" />
              </Link>
            ))}
          </div>

          <div className="p-6 bg-[#f8f9fa] border-t border-navy/10 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-navy/70 font-medium">Select Currency</span>
              <div className="flex items-center gap-1 font-bold text-navy cursor-pointer">
                <span>USD ($)</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-navy text-white text-sm font-bold rounded-lg hover:bg-navy/90 transition"
            >
              <User className="w-4 h-4" />
              <span>My Account</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}