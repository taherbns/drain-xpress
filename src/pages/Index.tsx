
import React, { useState, useRef } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { EmailPopup } from "@/components/EmailPopup";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactForm } from "@/components/ContactForm";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = id ? document.getElementById(id) : document.body;
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/assets/Drain-xpress.png"
              alt="Logo Drain-Xpress"
              className="h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex gap-12 items-center relative">
            <a href="#" className="text-gray-700 hover:text-skyblue font-medium">Accueil</a>
            <a href="#about" className="text-gray-700 hover:text-skyblue font-medium">À propos</a>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-skyblue font-medium">
                Services
              </button>
              <div className={`absolute top-full left-0 bg-white shadow-lg rounded transition-opacity duration-200 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className="min-w-[220px] py-2 px-4 text-left">
                  <li><a href="#drain" className="block py-2 text-gray-700 hover:text-skyblue">Débouchage de drain</a></li>
                  <li><a href="#camera" className="block py-2 text-gray-700 hover:text-skyblue">Inspection par caméra</a></li>
                  <li><a href="#prevention" className="block py-2 text-gray-700 hover:text-skyblue">Nettoyage préventif</a></li>
                </ul>
              </div>
            </div>

            <a href="#contact" className="text-gray-700 hover:text-skyblue font-medium">Demande de soumission</a>
            <a href="#contact" className="text-gray-700 hover:text-skyblue font-medium">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button
              onClick={() => handleLinkClick("contact")}
              className="ml-2 bg-skyblue hover:bg-skyblue-dark text-white hidden md:block"
            >
              Demander une soumission gratuite
            </Button>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <button onClick={() => handleLinkClick("")} className="text-left text-gray-700 hover:text-skyblue font-medium text-lg py-2">Accueil</button>
                  <button onClick={() => handleLinkClick("about")} className="text-left text-gray-700 hover:text-skyblue font-medium text-lg py-2">À propos</button>

                  <span className="text-gray-700 font-medium text-lg pt-2">Services</span>
                  <button onClick={() => handleLinkClick("drain")} className="pl-4 text-left text-gray-600 hover:text-skyblue py-1">Débouchage de drain</button>
                  <button onClick={() => handleLinkClick("camera")} className="pl-4 text-left text-gray-600 hover:text-skyblue py-1">Inspection par caméra</button>
                  <button onClick={() => handleLinkClick("prevention")} className="pl-4 text-left text-gray-600 hover:text-skyblue py-1">Nettoyage préventif</button>

                  <button onClick={() => handleLinkClick("contact")} className="text-left text-gray-700 hover:text-skyblue font-medium text-lg py-2">Demande de soumission</button>
                  <button onClick={() => handleLinkClick("contact")} className="text-left text-gray-700 hover:text-skyblue font-medium text-lg py-2">Contact</button>

                  <Button
                    onClick={() => handleLinkClick("contact")}
                    className="mt-4 bg-skyblue hover:bg-skyblue-dark text-white"
                  >
                    Demander une soumission gratuite
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-20">
          <HeroSection />
          <ServicesSection />
          <ContactForm />
          <AboutSection />
          <Footer />
          <EmailPopup />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
