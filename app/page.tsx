import { Announcement } from "@/components/announcement";
import { BookingPlanProvider } from "@/components/booking-plan-provider";
import { BookingSection } from "@/components/booking-section";
import { CareSection } from "@/components/care-section";
import { Hero } from "@/components/hero";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { QuoteBand } from "@/components/quote-band";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceMarquee } from "@/components/service-marquee";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <BookingPlanProvider>
      <Announcement />
      <SiteHeader />
      <ScrollReveal />

      <main id="top">
        <Hero />
        <ServiceMarquee />
        <ServicesSection />
        <ProcessSection />
        <CareSection />
        <PricingSection />
        <QuoteBand />
        <BookingSection />
      </main>

      <SiteFooter />
    </BookingPlanProvider>
  );
}
