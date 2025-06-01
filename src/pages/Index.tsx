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
  SheetClose,
} from "@/components/ui/sheet";

const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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
              ref={dropdownRef}
            >
              <button className="text-gray-700 hover:text-skyblue font-medium focus:outline-none">
                Services
              </button>
              <div
                className={`absolute top-full left-0 mt-0 bg-white rounded shadow-lg z-50 transition-opacity duration-200 ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <ul className="min-w-[220px] py-2 px-4 text-left">
                  <li>
                    <a href="#drain" className="block py-2 text-gray-700 hover:text-skyblue">
                      Débouchage de drain
                    </a>
                  </li>
                  <li>
                    <a href="#camera" className="block py-2 text-gray-700 hover:text-skyblue">
                      Inspection par caméra
                    </a>
                  </li>
                  <li>
                    <a href="#prevention" className="block py-2 text-gray-700 hover:text-skyblue">
                      Nettoyage préventif
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <a href="#contact" className="text-gray-700 hover:text-skyblue font-medium">
              Demande de soumission
            </a>
            <a href="#contact" className="text-gray-700 hover:text-skyblue font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button
              onClick={() => handleLinkClick("contact")}
              className="ml-2 bg-skyblue hover:bg-skyblue-dark text-white hidden md:block"
            >
              Demander une soumission gratuite
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {[
                    { label: "Accueil", id: "" },
                    { label: "À propos", id: "about" },
                    { label: "Débouchage de drain", id: "drain" },
                    { label: "Inspection par caméra", id: "camera" },
                    { label: "Nettoyage préventif", id: "prevention" },
                    { label: "Demande de soumission", id: "contact" },
                    { label: "Contact", id: "contact" },
                  ].map((item) => (
                    <SheetClose asChild key={item.id + item.label}>
                      <button
                        onClick={() => handleLinkClick(item.id)}
                        className="text-left text-gray-700 hover:text-skyblue font-medium text-lg py-2"
                      >
                        {item.label}
                      </button>
                    </SheetClose>
                  ))}

                  <SheetClose asChild>
                    <Button
                      onClick={() => handleLinkClick("contact")}
                      className="mt-4 bg-skyblue hover:bg-skyblue-dark text-white"
                    >
                      Demander une soumission gratuite
                    </Button>
                  </SheetClose>
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
