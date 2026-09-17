import { marqueeItems } from "@/lib/content";

export function ServiceMarquee() {
  return (
    <div className="service-marquee" aria-hidden="true">
      <div className="service-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
