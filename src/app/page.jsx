import CategoriesSection from "@/components/sections/CategoriesSection";
import CTASection from "@/components/sections/CTASection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import PopularItemsSection from "@/components/sections/PopularItemsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";


export default function Home() {
  return (
   <div className="py-20">
     <HeroSection />
     <FeaturesSection />
     <CategoriesSection />
     <PopularItemsSection />
     <WhyChooseUsSection />
     <TestimonialsSection />
     <CTASection />
   </div>
  );
}
