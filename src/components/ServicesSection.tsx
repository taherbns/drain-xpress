import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: "drain",
      title: "Débouchage de drain",
      description:
        "Élimination rapide et efficace des obstructions dans vos canalisations, avec des outils professionnels.",
      image:
        "https://images.unsplash.com/photo-1607082352305-326d1c9c13d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "camera",
      title: "Inspection par caméra",
      description:
        "Diagnostic précis de l’état de vos tuyaux sans ouvrir les murs grâce à des caméras haute résolution.",
      image:
        "https://images.unsplash.com/photo-1581578017421-8fd6aa0dfe8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "prevention",
      title: "Nettoyage préventif",
      description:
        "Un entretien régulier pour éviter les urgences et prolonger la durée de vie de vos installations.",
     
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b  from-[#66b4ff] to-skyblue/10 py-20"
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-blue-100 text-lg sm:text-xl leading-relaxed font-medium">
            Des solutions rapides, fiables et durables pour tous vos besoins en drainage.
          </p>
          <div className="w-16 h-1 bg-sky-400 mx-auto mt-6 rounded"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-2xl transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-blue-100 text-base mb-4">
                  {service.description}
                </p>
                <Button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-skyblue hover:bg-skyblue-dark text-white"
                >
                  Demander ce service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
