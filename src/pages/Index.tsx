
import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { EmailPopup } from "@/components/EmailPopup";
import { HeroSection } from "@/components/HeroSection";
// import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
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

// Navigation component

  
 const Navigation: React.FC = () => {
  const { t } = useLanguage();

  const menuItems = [
    { label: "home", href: "#" },
    { label: "about", href: "#about" },
    // { label: "services", href: "#services" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo stylisé */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-skyblue"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <path d="M9 22V12h6v10" />
              </svg>
              <span className="text-xl font-bold text-skyblue tracking-tight">
                DrainPro
              </span>
            </a>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-skyblue font-medium transition-colors duration-200"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          {/* Langue + CTA + Menu mobile */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="ml-2 bg-skyblue hover:bg-skyblue-dark text-white hidden md:block"
            >
              {t("freeEstimate")}
            </Button>

            {/* Menu mobile */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-700 hover:text-skyblue font-medium text-lg py-2 transition-colors duration-200"
                    >
                      {t(item.label)}
                    </a>
                  ))}
                  <Button
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-4 bg-skyblue hover:bg-skyblue-dark text-white"
                  >
                    {t("freeEstimate")}
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


// Main application
const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-16"> {/* Add padding to account for fixed header */}
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
