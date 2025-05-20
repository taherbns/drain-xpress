
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      className="text-sm font-medium"
    >
      {language === "en" ? "FR" : "EN"}
    </Button>
  );
};
