"use client";

import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import {
  type FormEvent,
  useRef,
  useState,
} from "react";

import { useBookingPlan } from "@/components/booking-plan-provider";
import {
  bookingPlans,
  bookingTimeSlots,
  petTypes,
  siteInfo,
} from "@/lib/content";

export function BookingSection() {
  const {
    minDate,
    selectedPlan,
    setSelectedPlan,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  } = useBookingPlan();
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
    form.reset();
    setSelectedPlan("");
    setSelectedDate("");
    setSelectedTime("");

    window.requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

  return (
    <section
      className="booking-section"
      id="booking"
      aria-labelledby="booking-title"
    >
      <div className="wrap booking-shell">
        <div className="booking-copy reveal">
          <p className="section-kicker">Book A Visit</p>
          <h2 id="booking-title">告诉我们，它今天需要什么。</h2>
          <p>
            提交后，我们会在营业时间内通过电话确认时间、项目与注意事项。首次到店请携带疫苗记录，并提前告知既往病史。
          </p>
          <div className="booking-contact">
            <a href={`tel:${siteInfo.phone}`}>
              <Phone aria-hidden="true" />
              {siteInfo.phoneDisplay}
            </a>
            <a
              className="booking-address"
              href={siteInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin aria-hidden="true" />
              {siteInfo.address}
            </a>
            <span>
              <Clock aria-hidden="true" />
              {siteInfo.hours}
            </span>
          </div>

          <figure className="store-map reveal">
            <a
              className="store-map-link"
              href={siteInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`在地图中查看${siteInfo.name}门店位置`}
            >
              <Image
                src="/assets/store-location-map.png"
                alt={`${siteInfo.name}位于${siteInfo.address}的门店位置图`}
                fill
                sizes="(max-width: 860px) 100vw, 36vw"
              />
              <span className="store-map-cta">
                打开地图导航
                <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
            <figcaption>
              门店位于新桥村泰安路西 11 巷 8 号，点击可打开地图导航。
            </figcaption>
          </figure>
        </div>

        <form className="booking-form reveal" onSubmit={handleSubmit}>
          <div
            className={`form-success${submitted ? " show" : ""}`}
            ref={successRef}
            role="status"
            aria-live="polite"
          >
            已收到预约信息。我们会尽快与你电话确认具体时间。
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="owner-name">您的称呼</label>
              <input
                id="owner-name"
                name="owner-name"
                type="text"
                autoComplete="name"
                placeholder="例如：王女士"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="phone">联系电话</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="用于确认预约"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="pet-type">宠物类型</label>
              <select id="pet-type" name="pet-type" required defaultValue="">
                <option value="">请选择</option>
                {petTypes.map((petType) => (
                  <option key={petType}>{petType}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="service-plan">预约项目</label>
              <select
                id="service-plan"
                name="service-plan"
                required
                value={selectedPlan}
                onChange={(event) => setSelectedPlan(event.target.value)}
              >
                <option value="">请选择</option>
                {bookingPlans.map((plan) => (
                  <option key={plan}>{plan}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="booking-date">期望日期</label>
              <input
                id="booking-date"
                name="booking-date"
                type="date"
                min={minDate}
                value={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="booking-time">期望时段</label>
              <select
                id="booking-time"
                name="booking-time"
                required
                value={selectedTime}
                onChange={(event) => setSelectedTime(event.target.value)}
              >
                <option value="">请选择</option>
                {bookingTimeSlots.map((timeSlot) => (
                  <option key={timeSlot}>{timeSlot}</option>
                ))}
              </select>
            </div>
            <div className="field full">
              <label htmlFor="pet-note">需要提前了解的情况</label>
              <textarea
                id="pet-note"
                name="pet-note"
                placeholder="例如：怕吹风、皮肤敏感、近期做过手术、比较容易打结"
              />
            </div>
          </div>
          <button className="btn btn-primary form-submit" type="submit">
            提交预约
            <ArrowUpRight aria-hidden="true" />
          </button>
          <p className="form-note">
            提交不代表预约已确认，我们会电话与您核实。
          </p>
        </form>
      </div>
    </section>
  );
}
