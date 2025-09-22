import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpeg';

const Nav = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const updateCounts = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const totalCartItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartCount(totalCartItems);
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    updateCounts();

    const handleCartUpdated = () => updateCounts();
    const handleWishlistUpdated = () => updateCounts();

    window.addEventListener("cartUpdated", handleCartUpdated);
    window.addEventListener("wishlistUpdated", handleWishlistUpdated);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
      window.removeEventListener("wishlistUpdated", handleWishlistUpdated);
    };
  }, []);

  // Updated: Close menu and scroll to top
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top smoothly
  };

  return (
    <div className="w-full fixed top-0 bg-white/90 backdrop-blur-md shadow-md z-50">
      <nav className="flex flex-wrap items-center justify-between px-2 lg:px-12 py-2">
        {/* Logo */}
        <div to="/" className="flex mt-2 mb-2 items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-9 w-9 object-contain rounded-xl shadow-sm"
          />
          <div className="leading-tight">
            <div className="text-xl font-extrabold tracking-wider">
              M/S <span className="text-[#ff823a]">MC&B</span>
            </div>
            <div className="text-[8px] lg:text-[11px] tracking-widest uppercase text-gray-500">
              M/S Monir Construction & Builders • 3D → Reality
            </div>
          </div>
        </div>

        {/* Desktop Call, Quote & Wishlist */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+8801700000000"
            className="btn px-4 py-2 flex items-center mt-4 gap-2 rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-[#ff823a] hover:text-white hover:scale-105"
          >
            <i className="bi bi-telephone"></i> +88 01814-266412
          </a>
          <Link
            to="/get-quote"
            className="btn px-5 mt-4 py-2 rounded-2xl bg-[#ff823a] text-white font-semibold shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#e5722c]"
            onClick={handleNavClick}
          >
            Get Quote
          </Link>

          {/* Wishlist Icon */}
          <Link
            to="/wishlist"
            className="relative mt-4 px-3 py-2 rounded-full border border-gray-200 hover:bg-[#ff823a] hover:text-white transition-all duration-300"
            onClick={handleNavClick}
          >
            <i className="bi bi-heart text-xl"></i>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <i className="bi bi-x-lg text-2xl"></i>
          ) : (
            <i className="bi bi-list text-2xl"></i>
          )}
        </button>

        {/* Nav Links + Mobile Call & Wishlist */}
        <div
          className={`w-full lg:flex lg:items-center lg:justify-between transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden lg:max-h-full lg:opacity-100 lg:mt-0"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/flats-for-sale", label: "Flats for Sale" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="nav-link relative uppercase font-bold"
                  onClick={handleNavClick} // scrolls to top on click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Call, Quote & Wishlist */}
          <div className="flex flex-col gap-3 mt-4 lg:hidden">
            <a
              href="tel:+8801700000000"
              className="btn px-4 py-2 flex items-center justify-center gap-2 rounded-2xl border border-gray-200 text-center transition-all duration-300 hover:bg-[#ff823a] hover:text-white hover:scale-105"
              onClick={handleNavClick}
            >
              <i className="bi bi-telephone"></i> +88 01814-266412
            </a>
            <Link
              to="/get-quote"
              className="btn px-5 py-2 rounded-2xl bg-[#ff823a] text-white font-semibold shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#e5722c] text-center"
              onClick={handleNavClick}
            >
              Get Quote
            </Link>
            <Link
              to="/wishlist"
              className="relative px-3 py-2 flex items-center justify-center rounded-full border border-gray-200 hover:bg-[#ff823a] hover:text-white transition-all duration-300"
              onClick={handleNavClick}
            >
              <i className="bi bi-heart text-xl"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
