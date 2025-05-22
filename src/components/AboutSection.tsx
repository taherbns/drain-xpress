import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, BadgeCheck, Trophy, Wrench, Camera, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-gradient-to-b from-[#66b4ff] to-sky-100 py-20">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523738758777-2cb2360ba0ff?ixlib=rb-4.1.0&q=80&w=800&fit=crop"
                alt="Expertise Drain-Xpress"
                className="rounded-lg shadow-xl object-cover h-full w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-skyblue text-white p-6 rounded-lg shadow-lg">
                <p className="font-bold text-xl">20+ ans</p>
                <p className="text-sm">d’expérience cumulée</p>
              </div>
            </div>
          </div>

          {/* Texte à propos */}
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre histoire</h2>
            <div className="w-20 h-1 bg-white/50 rounded mb-4"></div>
            <p className="text-white/90 leading-relaxed">
              Louis Rivest et Amine Ben cumulent chacun plus de 20 ans d’expérience dans le domaine de la construction.
              Forts de ce parcours, ils ont fondé Drain-Xpress afin d’offrir un service de qualité, exécuté avec rigueur, efficacité et transparence.
            </p>
            <p className="text-white/80 leading-relaxed">
              Leur approche repose sur une conviction simple : <strong>ce n’est pas ce que l’on fait, mais comment on le fait</strong>.
              Leur complémentarité et leur respect du client guident chaque intervention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-white/90">
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-white w-6 h-6" />
                <span className="font-medium">Service de qualité</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-white w-6 h-6" />
                <span className="font-medium">Urgence 24h/24</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="text-white w-6 h-6" />
                <span className="font-medium">Satisfaction garantie</span>
              </div>
            </div>

            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-6 bg-white text-skyblue font-semibold hover:bg-gray-100"
            >
              Nous contacter
            </Button>
          </div>
        </div>

       
      </div>
    </section>
  );
};
