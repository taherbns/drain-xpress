import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BadgeCheck, Clock, Smile } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: BadgeCheck,
      title: t("serviceExpertTitle"),
      description: t("serviceExpertDesc"),
    },
    {
      icon: Clock,
      title: t("alwaysAvailableTitle"),
      description: t("alwaysAvailableDesc"),
    },
    {
      icon: Smile,
      title: t("satisfactionTitle"),
      description: t("satisfactionDesc"),
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-skyblue to-skyblue/10 py-20"
    >
      {/* Couche sombre transparente */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            {t("ourGuarantees") || "Nos Engagements"}
          </h2>
          <p className="text-blue-100 text-lg font-medium sm:text-xl leading-relaxed">
            {t("guaranteesSubtitle") ||
              "Découvrez pourquoi les clients nous font confiance pour leurs besoins en débouchage de drains."}
          </p>
          <div className="w-16 h-1 bg-sky-400 mx-auto mt-6 rounded"></div>
        </div>

        {/* Cartes de services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-left md:text-center"
            >
              <div className="bg-white/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-10 w-10 text-sky-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-snug tracking-wide">
                {service.title}
              </h3>
              <p className="text-blue-100 text-base leading-relaxed sm:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
