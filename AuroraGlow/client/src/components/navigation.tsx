import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-[#ff7b47] text-xl font-bold">Bourne-ai</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/about">
                <button className="hover:text-[#ff7b47] transition-colors duration-300">
                  About
                </button>
              </Link>
              <button 
                onClick={() => scrollToSection("services")}
                className="hover:text-[#ff7b47] transition-colors duration-300"
              >
                Training
              </button>
              <button 
                onClick={() => scrollToSection("why-us")}
                className="hover:text-[#ff7b47] transition-colors duration-300"
              >
                Packages
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#ff7b47] transition-colors duration-300"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-[#ff7b47] text-white hover:bg-[#ff7b47]/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#ff7b47]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/about">
                <button className="block px-3 py-2 hover:text-[#ff7b47] transition-colors w-full text-left">
                  About
                </button>
              </Link>
              <button 
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 hover:text-[#ff7b47] transition-colors w-full text-left"
              >
                Training
              </button>
              <button 
                onClick={() => scrollToSection("why-us")}
                className="block px-3 py-2 hover:text-[#ff7b47] transition-colors w-full text-left"
              >
                Packages
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 hover:text-[#ff7b47] transition-colors w-full text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#ff7b47] text-white hover:bg-[#ff7b47]/90 transition-all duration-300 mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
