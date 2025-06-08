import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import { Mail, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const EmailPopup: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenEmailPopup");
      if (!hasSeenPopup) {
        setOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);

  try {
  const response = await fetch("http://localhost:5000/subscribe-newsletter", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email }),
});


    if (!response.ok) throw new Error("Échec");

    toast({
      title: t("subscribeSuccess"),
      description:
        t("language") === "en"
          ? "You will now receive our special offers and updates!"
          : "Vous recevrez désormais nos offres spéciales et mises à jour !",
    });

    setEmail("");
    setOpen(false);
    localStorage.setItem("hasSeenEmailPopup", "true");
  } catch (err) {
    toast({
      title: "Erreur",
      description:
        t("language") === "en"
          ? "Subscription failed. Try again later."
          : "Échec de l’abonnement. Veuillez réessayer plus tard.",
    });
  } finally {
    setSubmitting(false);
  }
};

  

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("hasSeenEmailPopup", "true");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="mx-auto bg-skyblue rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{t("popupTitle")}</h2>
          <p className="text-gray-600">{t("popupText")}</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Input
              type="email"
              placeholder="email@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Button
              type="submit"
              className="bg-skyblue hover:bg-skyblue-dark text-white"
              disabled={submitting}
            >
              {submitting
                ? t("language") === "en"
                  ? "Subscribing..."
                  : "Abonnement..."
                : t("subscribe")}
            </Button>
            <Button variant="outline" type="button" onClick={handleClose}>
              {t("noThanks")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
