
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, BadgeCheck, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: BadgeCheck,
      title: "expertTitle",
      description: "expertDesc"
    },
    {
      icon: Clock,
      title: "availableTitle",
      description: "availableDesc"
    },
    {
      icon: Trophy,
      title: "guaranteedTitle",
      description: "guaranteedDesc"
    }
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523738758777-2cb2360ba0ff?ixlib=rb-4.1.0&q=80&w=800&fit=crop"
                alt="Professional drain cleaning services"
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-skyblue text-white p-6 rounded-lg shadow-lg">
                <p className="font-bold text-xl">100%</p>
                <p className="text-sm">{t("satisfaction")}</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {t("aboutTitle")}
              </h2>
              <div className="w-20 h-1 bg-skyblue mb-6"></div>
              
              <p className="text-lg text-gray-700 mb-8">
                {t("aboutDesc")}
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg border-l-4 border-skyblue"
                  >
                    <div className="bg-skyblue-light p-3 rounded-full flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-skyblue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {t(value.title)}
                      </h3>
                      <p className="text-gray-600">
                        {t(value.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-8 bg-skyblue hover:bg-skyblue-dark text-white"
              >
                {t("contactUs")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
