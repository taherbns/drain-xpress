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
   <section className="relative bg-gradient-to-b from-sky-400 to-sky-100 min-h-[90vh] flex items-center">
  <div className="absolute inset-0 bg-black/40 z-0" />
  <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Bloc gauche : texte */}
          <div className="w-full lg:w-1/2 py-12 lg:py-0 text-white">
            <div className="animate-slide-up space-y-5">

              {/* ✅ Bannière service urgence */}
              <div className="flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block w-fit shadow-md">
                <AlarmClock className="w-4 h-4" />
                {t("emergencyService") || "Service d'urgence 24h/24"}
              </div>

              {/* Estimation gratuite */}
              <div className="bg-white text-skyblue text-sm md:text-base font-bold py-1 px-3 rounded-full inline-block">
                {t("freeEstimate")}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t("heroTitle")}
              </h1>

              <p className="text-xl  text-white/90">
                {t("heroSubtitle")}
              </p>

              {/* ✅ Description détaillée du service d'urgence */}
              <div className="text-white/85 text-l  leading-relaxed max-w-lg space-y-2">
                <p>
                {t("emergencyDescription") || "Notre équipe est disponible 24h/24 pour vos urgences de drainage."}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="w-4 h-4 text-white/70" />
                  <a
                    href="tel:+15145550123"
                    className="underline text-white font-semibold hover:text-skyblue transition"
                  >
                    +1 (514) 555-0123
                  </a>
                  
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-skyblue hover:text-skyblue-dark text-lg px-8 py-6"
                >
                  {t("callToAction")}
                </Button>

                {/* ✅ Bouton appel direct visible sur mobile */}
                <a
                  href="tel:+15145550123"
                  className="md:hidden inline-flex items-center justify-center px-6 py-3 rounded-lg bg-skyblue text-white font-medium text-base hover:bg-skyblue-dark transition"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  {t("callNow") || "Appeler maintenant"}
                </a>
              </div>

              <div className="mt-12 animate-bounce hidden md:block">
                <ArrowDown className="h-8 w-8 text-white mx-auto" />
              </div>
            </div>
          </div>

          {/* Bloc droit : image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1523552322653-4ca2658acbb0?ixlib=rb-4.1.0&q=80&w=1000&fit=crop"
                alt="Professional drain cleaning"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="bg-skyblue text-white px-4 py-2 rounded-full inline-block mb-2">
                  {t("discountOffer")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
