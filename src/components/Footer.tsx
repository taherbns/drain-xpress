
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0c3c76] text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-skyblue">DrainPro</h3>
            <p className="mb-4 text-gray-300">
              {t("footerDesc")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-skyblue">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-skyblue">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-skyblue">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-skyblue">
                  {t("services")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-skyblue">
                  {t("contact")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-skyblue">
                  {t("privacyPolicy")}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t("contactInfo")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-skyblue" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-skyblue" />
                <span className="text-gray-400">info.drainxpress@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-skyblue flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">2175 Rue St-Patrick, Montréal</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-sm text-gray-400 text-center">
            {t("footerRights").replace("2025", currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};
