import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, AlarmClock, Phone } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-[#295da0] min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Image splash d'eau en arrière-plan */}
      <img
        src="assets/drainHero2.png" 
        alt="Water splash background"
        className="absolute top-0 right-40 w-[800px] z-0 pointer-events-none"
      />

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Bloc gauche : texte */}
          <div className="w-full lg:w-1/2 py-12 lg:py-0 text-white space-y-5">
            {/* Badge urgence */}
            <div className="flex items-center gap-2 bg-[#e80505] text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md w-fit">
              <AlarmClock className="w-4 h-4" />
              {t("emergencyService") || "Service d'urgence 24h/24"}
            </div>

            {/* Badge estimation */}
            <div className="bg-white text-[#1262c9] text-sm md:text-base font-bold py-1 px-3 rounded-full w-fit">
              {t("freeEstimate")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("heroTitle")}
            </h1>

            <p className="text-xl text-white/90 max-w-xl">
              {t("heroSubtitle")}
            </p>

            <div className="text-white/85 text-l leading-relaxed space-y-2 max-w-lg">
              <p>
                {t("emergencyDescription") ||
                  "Notre équipe est disponible 24h/24 pour vos urgences de drainage."}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Phone className="w-4 h-4 text-white/70" />
                <a
                  href="tel:+15145550123"
                  className="underline font-semibold hover:text-[#e80505] transition"
                >
                  +1 (514) 555-0123
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#1262c9] hover:text-[#101c9e] text-lg px-8 py-6"
              >
                {t("callToAction")}
              </Button>

              <a
                href="tel:+15145550123"
                className="md:hidden inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1262c9] text-white font-medium text-base hover:bg-[#101c9e] transition"
              >
                <Phone className="mr-2 w-4 h-4" />
                {t("callNow") || "Appeler maintenant"}
              </a>
            </div>

            <div className="mt-12 animate-bounce hidden md:block">
              <ArrowDown className="h-8 w-8 text-white mx-auto" />
            </div>
          </div>

          {/* Bloc droit : image */}
          {/* <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-lg">
              <img
                src="assets/drainHero.png"
                alt="Professional drain cleaning"
                className="w-full h-96 object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
