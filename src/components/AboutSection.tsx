import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, BadgeCheck, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
<section id="about" className="relative bg-[#eaf3fb] py-20">

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523738758777-2cb2360ba0ff?ixlib=rb-4.1.0&q=80&w=800&fit=crop"
                alt="Expertise Drain-Xpress"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#1262c9] text-white p-5 rounded-lg shadow-lg">
                <p className="font-bold text-xl">20+ ans</p>
                <p className="text-sm">d’expérience cumulée</p>
              </div>
            </div>
          </div>

          {/* Texte à propos */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-[#1262c9]">Notre histoire</h2>
            <div className="w-16 h-1 bg-[#1262c9] rounded mb-2"></div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Louis Rivest et Amine Ben cumulent chacun plus de 20 ans d’expérience dans le domaine de la construction.
              Forts de ce parcours, ils ont fondé Drain-Xpress afin d’offrir un service de qualité, exécuté avec rigueur, efficacité et transparence.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Leur approche repose sur une conviction simple : <strong className="text-[#1262c9]">ce n’est pas ce que l’on fait, mais comment on le fait</strong>.
              Leur complémentarité et leur respect du client guident chaque intervention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-[#1262c9] w-6 h-6" />
                <span className="text-gray-700 font-medium">Service de qualité</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#1262c9] w-6 h-6" />
                <span className="text-gray-700 font-medium">Urgence 24h/24</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="text-[#1262c9] w-6 h-6" />
                <span className="text-gray-700 font-medium">Satisfaction garantie</span>
              </div>
            </div>

            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-6 bg-[#1262c9] text-white hover:bg-[#0f4eb2] font-semibold"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
