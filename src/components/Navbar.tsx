import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  refs: {
    homeRef: React.RefObject<HTMLElement>;
    servicesRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", ref: refs.homeRef },
    { name: "Services", ref: refs.servicesRef },
    { name: "About", ref: refs.aboutRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/10 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="bg-blue-600 p-2 rounded-sm"> */}
            <img
              src={Logo}
              alt="logo"
              className="w-[15%] sm:w-[20%] md:w-[15%] lg:w-[10%] bg-blue-600"
            />
            {/* </div> */}
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              PestAway
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.ref)}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">+234 7067653341</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.ref);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left font-medium text-gray-700 hover:text-blue-600 py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full justify-center mt-4">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">+234 7067653341</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
