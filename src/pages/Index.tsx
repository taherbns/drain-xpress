import React, { useState, useRef } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { EmailPopup } from "@/components/EmailPopup";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactForm } from "@/components/ContactForm";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMobileLinkClick = (targetId: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300); // attendre que le menu se ferme
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img
                src="/assets/Drain-xpress.png"
                alt="Logo Drain-Xpress"
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigation PC */}
          <nav className="hidden md:flex gap-12 items-center relative">
            <a href="#" className="text-gray-700 hover:text-skyblue font-medium text-base lg:text-lg transition-colors duration-200">
              Accueil
            </a>
            <a href="#about" className="text-gray-700 hover:text-skyblue font-medium text-base lg:text-lg transition-colors duration-200">
              À propos
            </a>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              ref={dropdownRef}
            >
              <button className="text-gray-700 hover:text-skyblue font-medium text-base lg:text-lg transition-colors duration-200">
                Services
              </button>
              <div
                className={`absolute top-full left-0 mt-0 bg-white rounded shadow-lg z-50 transition-opacity duration-200 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <ul className="min-w-[220px] py-2 px-4 text-left">
                  <li><a href="#drain" className="block py-2 text-gray-700 hover:text-skyblue">Débouchage de drain</a></li>
                  <li><a href="#camera" className="block py-2 text-gray-700 hover:text-skyblue">Inspection par caméra</a></li>
                  <li><a href="#prevention" className="block py-2 text-gray-700 hover:text-skyblue">Nettoyage préventif</a></li>
                </ul>
              </div>
            </div>

            <a href="#contact" className="text-gray-700 hover:text-skyblue font-medium text-base lg:text-lg transition-colors duration-200">
              Demande de soumission
            </a>
            <a href="#contact" className="text-gray-700 hover:text-skyblue font-medium text-base lg:text-lg transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Actions & Menu Mobile */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="ml-2 bg-skyblue hover:bg-skyblue-dark text-white hidden md:block"
            >
              Demander une soumission gratuite
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <button onClick={() => handleMobileLinkClick("")} className="text-left text-gray-700 hover:text-skyblue font-medium text-lg py-2">Accueil</button>
                  <button onClick={() => handleMobileLinkClick("about")} className="text-left text-gray-700 hover:text-skyblue font-medium text-lg py-2">À propos</button>
                  <div className="border-t pt-2">
                    <span className="text-gray-700 font-medium text-lg py-1">Services</span>
                    <button onClick={() => handleMobileLinkClick("drain")} className="block text-left text-gray-600 hover:text-skyblue pl-4 py-1">Débouchage de drain</button>
                    <button onClick={() => handleMobileLinkClick("camera")} className="block text-left text-gray-600 hover:text-skyblue pl-4 py-1">Inspection par caméra</button>
                    <button onClick={() => handleMobileLinkClick("prevention")} className="block text-left text-gray-600 hover:text-skyblue pl-4 py-1">Nettoyage préventif</button>
                  </div>
                  <button onClick={() => handleMobileLinkClick("contact")} className="text-left text-gray-700 hover:text-skyblue font-medium text-lg py-2">Demande de soumission</button>
                  <button onClick={() => handleMobileLinkClick("contact")} className="text-left text-gray-700 hover:text-skyblue font-medium text-lg py-2">Contact</button>
                  <Button
                    onClick={() => handleMobileLinkClick("contact")}
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
