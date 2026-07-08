import HeroSection from "@/components/HeroSection";
import OutcomesSection from "@/components/OutcomesSection";
import AudienceSection from "@/components/AudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <StickyCTA />
      <main>
        <HeroSection />
        <OutcomesSection />
        <AudienceSection />
        <TestimonialsSection />
        <PricingSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <footer className="border-t border-border py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Ильяс Азелханов
            </p>
            <p className="text-xs text-muted">
              CEO LinkMAX · AI для контент-команд
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
