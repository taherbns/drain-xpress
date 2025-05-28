import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Check } from "lucide-react";

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    drainSize: "",
    message: "",
  subject: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        drainSize: "",
        message: "",
        subject: [],
      });
      toast({
        title: t("contactSuccess"),
        description: t("language") === "en"
          ? "We'll get back to you as soon as possible."
          : "Nous vous répondrons dès que possible.",
        duration: 5000,
      });
    }, 1500);
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value, checked } = e.target;
  setFormData((prev) => {
    const updatedSubjects = checked
      ? [...prev.subject, value]
      : prev.subject.filter((s: string) => s !== value);
    return { ...prev, subject: updatedSubjects };
  });
};

  return (
    <section id="contact" className="relative bg-[#eaf3fb] py-20">

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1262c9] mb-4">
            {t("formTitle")}
          </h2>
          <div className="w-16 h-1 bg-[#1262c9] mx-auto mb-6 rounded"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="flex flex-col md:flex-row">
              {/* Infos à gauche */}
              <div className="hidden md:flex bg-[#1262c9] md:w-1/3 p-8 text-white flex-col justify-between">

                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    {t("contactInfo")}
                  </h3>
                  <p className="mb-8 text-white/90">
                    {t("contactDesc")}
                  </p>
                  <div className="space-y-4 text-white/90 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <p>info.drainxpress@gmail.com</p>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <p>2175 Rue St-Patrick, Montréal</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-white/30 pt-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1" />
                    <p className="text-sm text-white/80">
                      {t("freeEstimateDetail")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <div className="md:w-2/3 p-8 bg-white text-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-[#1262c9]">
                  {t("freeEstimate")}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        {t("firstName")}*
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        {t("lastName")}*
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                      {t("address")}*
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      {t("email")}*
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="drainSize" className="block text-sm font-medium mb-1">
                      {t("drainSize")}
                    </label>
                    <div className="flex items-center">
                      <Input
                        id="drainSize"
                        name="drainSize"
                        type="number"
                        placeholder="45"
                        value={formData.drainSize}
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-sm text-gray-500">cm</span>
                    </div>
                  </div>
                <label className="block text-sm font-medium mb-2">
                  Sujet de la demande *
                </label>

               <div>
  <label className="block text-sm font-medium mb-2">
    Sujet de la demande *
  </label>

  <div className="space-y-2">
    <label className="flex items-center space-x-2 text-gray-700">
      <input
        type="checkbox"
        name="subject"
        value="expert"
        checked={formData.subject.includes("expert")}
        onChange={handleCheckboxChange}
        className="h-4 w-4 text-skyblue border-gray-300 rounded"
      />
      <span>Parler à un expert dès maintenant</span>
    </label>

    <label className="flex items-center space-x-2 text-gray-700">
      <input
        type="checkbox"
        name="subject"
        value="camera"
        checked={formData.subject.includes("camera")}
        onChange={handleCheckboxChange}
        className="h-4 w-4 text-skyblue border-gray-300 rounded"
      />
      <span>Réserver une inspection caméra</span>
    </label>

    <label className="flex items-center space-x-2 text-gray-700">
      <input
        type="checkbox"
        name="subject"
        value="prevention"
        checked={formData.subject.includes("prevention")}
        onChange={handleCheckboxChange}
        className="h-4 w-4 text-skyblue border-gray-300 rounded"
      />
      <span>Planifier un entretien préventif</span>
    </label>
  </div>
</div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      {t("message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-[#1262c9] hover:bg-[#0f4eb2] text-white font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? t("language") === "en"
                          ? "Submitting..."
                          : "Envoi en cours..."
                        : t("submit")}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
