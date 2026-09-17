"use client";

import { Check } from "lucide-react";

import { useBookingPlan } from "@/components/booking-plan-provider";
import { pricingPlans } from "@/lib/content";

export function PricingSection() {
  const { choosePlan } = useBookingPlan();

  return (
    <section
      className="section price-section"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="section-kicker">Simple Pricing</p>
            <h2 id="pricing-title">先选一个合适的起点。</h2>
          </div>
          <p className="section-intro">
            最终价格会根据体型、毛量、打结程度和配合度确认。到店评估后，未经同意不会增加项目。
          </p>
        </div>

        <div className="price-grid">
          {pricingPlans.map((plan) => {
            const isFeatured = "featured" in plan && plan.featured;

            return (
              <article
                className={`price-card reveal${isFeatured ? " featured" : ""}`}
                key={plan.name}
              >
                {isFeatured ? (
                  <span className="popular-label">最受欢迎</span>
                ) : null}
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-copy">{plan.description}</p>
                <p className="plan-price">
                  {plan.price}
                  <small>{plan.suffix}</small>
                </p>
                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn choose-plan${
                    isFeatured ? " btn-primary" : ""
                  }`}
                  type="button"
                  data-plan={plan.name}
                  onClick={() => choosePlan(plan.name)}
                >
                  选择套餐
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
