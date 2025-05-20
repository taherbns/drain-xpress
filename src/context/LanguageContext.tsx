
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fr';

type Translations = {
  [key: string]: {
    en: string;
    fr: string;
  };
};

const translations: Translations = {
  // Header & Navigation
  "language": { en: "en", fr: "fr" },
  "home": { en: "Home", fr: "Accueil" },
  "about": { en: "About", fr: "À Propos" },
  
  "services": { en: "Services", fr: "Services" },
  "contact": { en: "Contact", fr: "Contact" },
  "contactUs": { en: "Contact Us", fr: "Contactez-Nous" },
  
  // Hero Section
  "heroTitle": { en: "Swift Drain Solutions!", fr: "Solutions Rapides pour Drains!" },
  "heroSubtitle": { 
    en: "Got a clogged drain? We have the answer! Our expert team provides fast, reliable, and affordable drain unblocking services.", 
    fr: "Drain bouché? Nous avons la solution! Notre équipe d'experts propose des services de débouchage rapides, fiables et abordables." 
  },
  "freeEstimate": { en: "FREE ESTIMATE", fr: "SOUMISSION GRATUITE" },
  "callToAction": { en: "Unblock Now!", fr: "Débouchez Maintenant!" },


"emergencyService": {
  en: "24/7 Emergency Service",
  fr: "Service d'urgence 24h/24"
},

"emergencyDescription": {
  en: "Our expert team is available 24/7 for emergency unclogging, leak repair, and drainage solutions. Fast, reliable and available even on holidays.",
  fr: "Notre équipe d’experts intervient 24h/24, 7j/7 pour tout débouchage urgent, fuite d’eau ou problème de drainage. Rapide, fiable, même les jours fériés."
},

"callNow": {
  en: "Call Now",
  fr: "Appeler maintenant"
},

  // Services Section
  "ourServices": { en: "Our Top Drain Unblocking Services", fr: "Nos Services de Débouchage de Drain" },
  "servicesSubtitle": { 
    en: "Explore our range of professional drain unblocking services! We tackle everything from minor clogs to major blockages.", 
    fr: "Découvrez notre gamme de services professionnels de débouchage! Nous traitons tout, des petits bouchons aux blocages majeurs."
  },
  "residentialTitle": { en: "Residential Drain Clearing", fr: "Débouchage Résidentiel" },
  "residentialDesc": { 
    en: "Complete drain cleaning solutions for your home, backed by our satisfaction guarantee.", 
    fr: "Solutions complètes de nettoyage de drain pour votre maison, garanties satisfaction." 
  },
  "commercialTitle": { en: "Commercial Drain Services", fr: "Services Commerciaux" },
  "commercialDesc": { 
    en: "Specialized services for businesses and commercial properties with minimal disruption.", 
    fr: "Services spécialisés pour entreprises et propriétés commerciales avec perturbation minimale." 
  },
  "emergencyTitle": { en: "Emergency Drain Rescue", fr: "Urgence Drain" },
  "emergencyDesc": { 
    en: "24/7 rapid response to drainage emergencies. We're always here when you need us most.", 
    fr: "Intervention rapide 24/7 pour les urgences de drainage. Toujours présents quand vous en avez besoin." 
  },
  "getQuote": { en: "Get Quote", fr: "Obtenir Devis" },
  "discountOffer": { en: "10% DISCOUNT on drains over 45cm", fr: "10% DE RABAIS pour les drains de plus de 45cm" },
  "discountOfferDesc": {
    en: "Contact us today to take advantage of this special offer!",
    fr: "Contactez-nous aujourd'hui pour profiter de cette offre spéciale!"
  },

  // Services Guarantees
 serviceExpertTitle: {
    en: "Expert Service",
    fr: "Service Expert",
  },
  serviceExpertDesc: {
    en: "Our skilled team has years of experience handling all types of drain blockages.",
    fr: "Notre équipe qualifiée a des années d'expérience dans tous types de blocages de drain.",
  },

  alwaysAvailableTitle: {
    en: "Always Available",
    fr: "Toujours Disponible",
  },
  alwaysAvailableDesc: {
    en: "Drain issues don’t wait, and neither do we. Our team is ready to help you day and night.",
    fr: "Les problèmes de drain n'ont pas d'horaire, mais nous oui ! Notre équipe est prête à vous aider jour et nuit.",
  },

  satisfactionTitle: {
    en: "Satisfaction Guaranteed",
    fr: "Satisfaction Garantie",
  },
  satisfactionDesc: {
    en: "Your satisfaction is our priority! We guarantee our work so your drains work perfectly.",
    fr: "Votre satisfaction est notre priorité ! Nous garantissons notre travail pour que vos drains fonctionnent parfaitement.",
  },

  ourGuarantees: {
    en: "Our Commitments",
    fr: "Nos Engagements",
  },
  guaranteesSubtitle: {
    en: "Why hundreds of clients trust us for fast, reliable drain unclogging.",
    fr: "Découvrez pourquoi les clients nous font confiance pour leurs besoins en débouchage de drains.",
  },

  
  // About Section
  "aboutTitle": { en: "Our Commitment to Excellence", fr: "Notre Engagement pour l'Excellence" },
  "aboutDesc": { 
    en: "With years of experience in the industry, our company has established itself as a trusted provider of drain cleaning services. We pride ourselves on our professional approach, skilled technicians, and commitment to customer satisfaction.", 
    fr: "Avec des années d'expérience dans l'industrie, notre entreprise s'est établie comme un fournisseur de confiance de services de débouchage de drains. Nous sommes fiers de notre approche professionnelle, de nos techniciens qualifiés et de notre engagement envers la satisfaction client."
  },
  "expertTitle": { en: "Expert Service", fr: "Service Expert" },
  "expertDesc": {
    en: "Our skilled team has years of experience handling all types of drain blockages.",
    fr: "Notre équipe qualifiée a des années d'expérience dans tous types de blocages de drain."
  },
  "availableTitle": { en: "Always Available", fr: "Toujours Disponible" },
  "availableDesc": {
    en: "Drain problems don't keep a schedule, but we do! Our team is ready to help you day or night.",
    fr: "Les problèmes de drain n'ont pas d'horaire, mais nous oui! Notre équipe est prête à vous aider jour et nuit."
  },
  "guaranteedTitle": { en: "Satisfaction Guaranteed", fr: "Satisfaction Garantie" },
  "guaranteedDesc": {
    en: "Your happiness is our priority! We guarantee our work, so you can trust us to leave your drains flowing smoothly.",
    fr: "Votre satisfaction est notre priorité! Nous garantissons notre travail pour que vos drains fonctionnent parfaitement."
  },
  "satisfaction": { en: "Satisfaction", fr: "Satisfaction" },
  
  // Testimonials Section
  "testimonialsTitle": { en: "What Our Clients Say", fr: "Ce Que Disent Nos Clients" },
  "testimonialsSubtitle": {
    en: "Don't just take our word for it! Hear from our satisfied customers who experienced our top-notch drain unblocking services.",
    fr: "Ne vous fiez pas seulement à notre parole! Écoutez nos clients satisfaits qui ont expérimenté nos services de débouchage de premier ordre."
  },
  "testimonial1": {
    en: "Thanks to this team, my clogged drain was fixed in no time! They were professional and friendly. Highly recommend their services!",
    fr: "Grâce à cette équipe, mon drain bouché a été réparé en un rien de temps! Ils étaient professionnels et sympathiques. Je recommande vivement leurs services!"
  },
  "testimonial2": {
    en: "I called for help late at night, and they arrived quickly! Amazing service and my drain problem was solved fast. Truly a lifesaver!",
    fr: "J'ai appelé à l'aide tard dans la nuit, et ils sont arrivés rapidement! Service incroyable et mon problème de drain a été résolu rapidement. Vraiment un sauveur!"
  },
  "testimonial3": {
    en: "The team was professional and efficient! They cleared my drain without any mess. I'm really impressed and will definitely call again if needed!",
    fr: "L'équipe était professionnelle et efficace! Ils ont débouché mon drain sans aucun désordre. Je suis vraiment impressionné et je les rappellerai certainement si nécessaire!"
  },
  
  // Contact Form
  "formTitle": { en: "Get in Touch", fr: "Contactez-Nous" },
  "contactInfo": { en: "Contact Information", fr: "Informations de Contact" },
  "contactDesc": {
    en: "Fill out the form to request a free estimate or ask any questions you may have.",
    fr: "Remplissez le formulaire pour demander une soumission gratuite ou poser des questions."
  },
  "freeEstimateDetail": {
    en: "Each client receives a FREE estimate with no obligation!",
    fr: "Chaque client reçoit une soumission GRATUITE sans obligation!"
  },
  "firstName": { en: "First Name", fr: "Prénom" },
  "lastName": { en: "Last Name", fr: "Nom" },
  "address": { en: "Address", fr: "Adresse" },
  "email": { en: "Email", fr: "Courriel" },
  "message": { en: "Message", fr: "Message" },
  "drainSize": { en: "Drain Size (optional)", fr: "Taille du Drain (optionnel)" },
  "discountNote": { en: "10% discount for drains over 45cm", fr: "10% de rabais pour les drains de plus de 45cm" },
  "submit": { en: "Submit", fr: "Soumettre" },
  "contactSuccess": { en: "Thank you for contacting us!", fr: "Merci de nous avoir contacté!" },
  
  // Email Popup
  "popupTitle": { en: "Stay Updated", fr: "Restez Informé" },
  "popupText": { 
    en: "Subscribe to receive notifications about our promotions and services", 
    fr: "Abonnez-vous pour recevoir des notifications sur nos promotions et services" 
  },
  "subscribe": { en: "Subscribe", fr: "S'abonner" },
  "noThanks": { en: "No, thanks", fr: "Non, merci" },
  "subscribeSuccess": { en: "Thank you for subscribing!", fr: "Merci de vous être abonné!" },
  
  // Footer
  "footerDesc": {
    en: "Professional drain unblocking services for residential and commercial properties. Available 24/7 for emergencies.",
    fr: "Services professionnels de débouchage de drains pour propriétés résidentielles et commerciales. Disponible 24/7 pour les urgences."
  },
  "quickLinks": { en: "Quick Links", fr: "Liens Rapides" },
  "footerRights": { en: "© 2025 DrainPro. All rights reserved.", fr: "© 2025 DrainPro. Tous droits réservés." },
  "privacyPolicy": { en: "Privacy Policy", fr: "Politique de Confidentialité" },
  "termsOfService": { en: "Terms of Service", fr: "Conditions d'Utilisation" },
};

type LanguageContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
