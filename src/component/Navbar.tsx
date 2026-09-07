"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, ShoppingBag } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import { useCart } from "@/context/CartContext";

// Filter out 'All' for Navbar sub-menu
const NAV_CATEGORIES = CATEGORIES.filter((cat) => cat !== "All");

export default function Navbar() {
  const { cart } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Total items in cart count calculation
  const totalCartCount = cart.length;

  // Default active category
  const [activeCategory, setActiveCategory] = useState<string>(NAV_CATEGORIES[0] || "Hoodies");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolidTheme = isScrolled || isDropdownOpen;

  // Active category ke hisaab se products filter kar rahe hain
  const activeProducts = PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out ${
        isSolidTheme
          ? "bg-white backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-navy border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-black tracking-tight flex items-center">
            <span className="text-[#FF5A00]">T</span>
            <span
              className={`ml-1.5 font-bold transition-colors duration-200 ${
                isSolidTheme ? "text-[#092834]" : "text-white"
              }`}
            >
              SOURCED
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] ml-1 self-end mb-1.5"></span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center space-x-8 text-[15px] font-semibold transition-colors duration-200 ${
            isSolidTheme ? "text-[#092834]" : "text-white"
          }`}
        >
          {/* Products Mega Menu Trigger */}
          <div
            className="h-20 flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 hover:text-[#FF5A00] transition-colors duration-200 focus:outline-none py-2 cursor-pointer"
              aria-expanded={isDropdownOpen}
            >
              <Link href="/products" className="hover:text-[#FF5A00] transition-colors duration-200">
                <span>Products</span>
              </Link>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ease-out ${
                  isDropdownOpen
                    ? "rotate-180 text-[#FF5A00]"
                    : isSolidTheme
                    ? "text-[#092834]/60"
                    : "text-white/70"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Pure White Mega Menu Box */}
            <div
              className={`fixed top-20 left-0 w-screen bg-white text-[#092834] border-b border-t border-gray-200 shadow-2xl transition-all duration-300 ease-out origin-top ${
                isDropdownOpen
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Left: Garment Categories List */}
                  <div className="col-span-4 border-r border-gray-200 pr-6 space-y-1">
                    <span className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3 block">
                      Garment Categories
                    </span>

                    <div className="space-y-1">
                      {NAV_CATEGORIES.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                          <div
                            key={category}
                            onMouseEnter={() => setActiveCategory(category)}
                            className={`flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ease-out ${
                              isActive
                                ? "bg-[#FF5A00] text-white font-bold shadow-md shadow-[#FF5A00]/20"
                                : "text-[#092834] hover:text-[#FF5A00] hover:bg-gray-50 font-medium"
                            }`}
                          >
                            <Link href={`/products?category=${category}`} className="text-sm w-full block">
                              {category}
                            </Link>
                            <ChevronRight
                              className={`w-4 h-4 transition-all duration-200 ease-out ${
                                isActive ? "opacity-100 translate-x-1" : "opacity-0"
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right: Dynamic Product Preview Cards */}
                  <div className="col-span-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                        <div>
                          <span className="text-[#FF5A00] text-xs font-bold uppercase tracking-wider block mb-0.5">
                            Category Preview
                          </span>
                          <h3 className="text-xl font-extrabold text-[#092834]">
                            {activeCategory} Essentials
                          </h3>
                        </div>

                        <Link
                          href={`/products?category=${activeCategory}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF5A00] hover:text-[#e04f00] transition-colors duration-200"
                        >
                          <span>Explore All {activeCategory}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* Product Preview Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {activeProducts.map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/products/${prod.id}`}
                            className="group bg-[#f8f9fa] hover:bg-white rounded-2xl p-4 border border-gray-200/80 hover:border-[#FF5A00]/40 shadow-xs hover:shadow-lg transition-all duration-300 ease-out flex flex-col justify-between"
                          >
                            <div className="relative w-full h-44 bg-[#f1f3f5] rounded-xl overflow-hidden mb-3.5 flex items-center justify-center">
                              <Image
                                src={prod.img}
                                alt={prod.name}
                                fill
                                className="object-contain p-3 group-hover:scale-105 transition-transform duration-300 ease-out"
                              />
                              {prod.weights[0] && (
                                <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-[#092834] border border-gray-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                                  {prod.weights[0]}
                                </span>
                              )}
                            </div>

                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-[#092834] group-hover:text-[#FF5A00] transition-colors duration-200 leading-snug">
                                {prod.name}
                              </h4>
                              <span className="text-[11px] text-gray-500 font-medium block mt-1">
                                Custom Development Available
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/customization" className="hover:text-[#FF5A00] transition-colors duration-200">
            Customization
          </Link>
          <Link href="/how-it-works" className="hover:text-[#FF5A00] transition-colors duration-200">
            How It Works
          </Link>
          <Link href="/quality" className="hover:text-[#FF5A00] transition-colors duration-200">
            Quality
          </Link>
          <Link href="/about" className="hover:text-[#FF5A00] transition-colors duration-200">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#FF5A00] transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Action Buttons (Cart + Quote) */}
        <div className="flex items-center gap-4">
          
          {/* CART BUTTON WITH BADGE */}
          <Link
            href="/cart"
            className={`relative p-2.5 rounded-xl transition-all duration-200 ease-out flex items-center justify-center ${
              isSolidTheme
                ? "bg-gray-100 text-[#092834] hover:bg-gray-200 hover:text-[#FF5A00]"
                : "bg-white/10 text-white hover:bg-white/20 hover:text-[#FF5A00]"
            }`}
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />

            {/* Badge Counter */}
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#FF5A00] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scale-in">
                {totalCartCount}
              </span>
            )}
          </Link>

          {/* Desktop Get Quote CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-[#FF5A00] hover:bg-[#e04f00] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ease-out shadow-md shadow-[#FF5A00]/25 hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors duration-200 ${
                isSolidTheme ? "text-[#092834] hover:text-[#FF5A00]" : "text-white hover:text-[#FF5A00]"
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 shadow-xl max-h-[80vh] overflow-y-auto">
          <Link href="/" className="block py-1 font-semibold text-[#092834] hover:text-[#FF5A00]">
            Home
          </Link>
          <Link href="/about" className="block py-1 font-semibold text-[#092834] hover:text-[#FF5A00]">
            About
          </Link>

          <div>
            <span className="block text-xs uppercase tracking-wider text-[#FF5A00] font-bold pt-2 pb-1">
              Products
            </span>
            <div className="grid grid-cols-2 gap-2 pl-2">
              {NAV_CATEGORIES.map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${category}`}
                  className="text-sm text-gray-600 hover:text-[#FF5A00] py-1 font-medium"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/customization" className="block py-1 font-semibold text-[#092834] hover:text-[#FF5A00]">
            Customization
          </Link>
          <Link href="/how-it-works" className="block py-1 font-semibold text-[#092834] hover:text-[#FF5A00]">
            How It Works
          </Link>
          <Link href="/quality" className="block py-1 font-semibold text-[#092834] hover:text-[#FF5A00]">
            Quality
          </Link>
          <Link href="/contact" className="block py-1 font-semibold text-[#092834] hover:text-[#FF5A00]">
            Contact
          </Link>

          <div className="pt-2">
            <Link
              href="/contact"
              className="block text-center w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-[#FF5A00]/25"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}