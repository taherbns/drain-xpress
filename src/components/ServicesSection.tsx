import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

const services = [
  {
    id: "drain",
    title: t("serviceDrainTitle"),
    description: t("serviceDrainDesc"),
    image: "https://i.pinimg.com/736x/26/4f/aa/264faa39c52b6c4cb152c606aabe9653.jpg",
  },
  {
    id: "camera",
    title: t("serviceCameraTitle"),
    description: t("serviceCameraDesc"),
    image: "https://i.pinimg.com/736x/02/a1/ea/02a1eabedd739f688550899ec2e7200b.jpg",
  },
  {
    id: "prevention",
    title: t("servicePreventiveTitle"),
    description: t("servicePreventiveDesc"),
    image: "https://i.pinimg.com/736x/f4/b5/46/f4b54649bd1b7d6732fbffa6ac334835.jpg",
  },
];

  return (
    <section id="services" className="relative bg-[#eaf3fb] py-20">

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#1262c9] mb-4">
            {t("Service")}
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
            {t("ourServices")}
          </p>
          <div className="w-16 h-1 bg-[#1262c9] mx-auto mt-6 rounded"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm border border-white/20"

            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1262c9] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {service.description}
                </p>
                <Button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-[#1262c9] hover:bg-[#0f4eb2] text-white"
                >
                   {t("requestService")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
