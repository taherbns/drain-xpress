import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, ArrowDown, Wrench, Camera, Droplet } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#66b4ff] to-sky-100 min-h-[110vh] flex items-center">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Texte à gauche */}
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Débouchage de drain rapide et garanti à Montréal
            </h1>

            <p className="text-lg text-white/90 max-w-md">
              Intervention 24h/24 pour débouchage, inspection par caméra et nettoyage préventif.
            </p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
              Plus de 20 ans d’expérience. Service fiable, efficace, avec garantie satisfaction.
            </p>

            <div className="flex items-center gap-3 text-white text-lg font-semibold">
              <Phone className="w-5 h-5" />
              <a href="tel:+15145550123" className="underline hover:text-skyblue transition">
                +1 (514) 555-0123
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                onClick={scrollToContact}
                className="bg-white text-skyblue hover:bg-gray-100 font-semibold px-6 py-3"
              >
                Demander une soumission gratuite
              </Button>
              <a
                href="tel:+15145550123"
                className="inline-flex items-center px-6 py-3 rounded bg-red-600 text-white font-semibold hover:bg-red-700"
              >
                Urgence 24/7
              </a>
            </div>

            <div className="mt-10 hidden md:block animate-bounce">
              <ArrowDown className="h-8 w-8 text-white mx-auto" />
            </div>
          </div>

          {/* Image à droite */}
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523552322653-4ca2658acbb0?ixlib=rb-4.1.0&q=80&w=1000&fit=crop"
                alt="Drain-Xpress"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services rapides (liens vers sections) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
          <a
            href="#drain"
            className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-all"
          >
            <Wrench className="h-8 w-8 text-white mb-3" />
            <h3 className="text-xl font-semibold mb-1">Débouchage de drain</h3>
            <p className="text-white/80 text-sm">
              Élimination rapide et efficace des obstructions.
            </p>
          </a>

          <a
            href="#camera"
            className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-all"
          >
            <Camera className="h-8 w-8 text-white mb-3" />
            <h3 className="text-xl font-semibold mb-1">Inspection par caméra</h3>
            <p className="text-white/80 text-sm">
              Diagnostic sans démolition, localisez le problème.
            </p>
          </a>

          <a
            href="#prevention"
            className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-all"
          >
            <Droplet className="h-8 w-8 text-white mb-3" />
            <h3 className="text-xl font-semibold mb-1">Nettoyage préventif</h3>
            <p className="text-white/80 text-sm">
              Prévenez les urgences avec un entretien régulier.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
