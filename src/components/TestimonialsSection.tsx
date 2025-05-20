
// import React from "react";
// import { useLanguage } from "@/context/LanguageContext";
// import { Star, Quote } from "lucide-react";

// export const TestimonialsSection: React.FC = () => {
//   const { t } = useLanguage();

//   const testimonials = [
//     {
//       text: "testimonial1",
//       author: "Sarah J.",
//       position: "Homeowner"
//     },
//     {
//       text: "testimonial2",
//       author: "Mike T.",
//       position: "Restaurant Owner"
//     },
//     {
//       text: "testimonial3",
//       author: "Lisa R.",
//       position: "Property Manager"
//     }
//   ];

//   return (
//     <section className="py-16 bg-skyblue/10">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             {t("testimonialsTitle")}
//           </h2>
//           <div className="w-20 h-1 bg-skyblue mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             {t("testimonialsSubtitle")}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg p-6 relative transition-transform hover:scale-105"
//             >
//               <div className="absolute -top-3 -left-3 bg-skyblue rounded-full p-2">
//                 <Quote className="text-white h-5 w-5" />
//               </div>
              
//               <div className="flex items-center mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
//                 ))}
//               </div>
              
//               <p className="text-gray-600 italic mb-6">
//                 "{t(testimonial.text)}"
//               </p>
              
//               <div className="flex items-center">
//                 <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
//                   <span className="text-skyblue font-bold">
//                     {testimonial.author.charAt(0)}
//                   </span>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
//                   <p className="text-sm text-gray-500">{testimonial.position}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
