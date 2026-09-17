"use client";

import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import { type FormEvent } from "react";

import { useBookingPlan } from "@/components/booking-plan-provider";
import { bookingTimeSlots } from "@/lib/content";

export function Hero() {
  const {
    minDate,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    chooseBookingTime,
  } = useBookingPlan();

  const handleQuickBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    chooseBookingTime(selectedDate, selectedTime);
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        src="/assets/hero-grooming.jpg"
        alt="完成洗护后的狗狗在店内安静休息"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div>
          <p className="eyebrow">专业犬猫洗护 · 一宠一室</p>
          <h1 id="hero-title">
            干净，蓬松，
            <br />
            <span>刚刚好。</span>
          </h1>
          <p className="hero-lede">
            从皮肤检查、洗护到吹整收尾，尊重每只宠物的情绪和节奏。全程可视化，不赶单，不套模板。
          </p>
          <form className="hero-booking" onSubmit={handleQuickBooking}>
            <div className="hero-booking-title">
              <Clock aria-hidden="true" />
              <span>期望到店时间</span>
            </div>
            <div className="hero-booking-controls">
              <label className="hero-booking-field" htmlFor="hero-booking-date">
                <span>期望日期</span>
                <input
                  id="hero-booking-date"
                  name="hero-booking-date"
                  type="date"
                  min={minDate}
                  value={selectedDate}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  required
                />
              </label>
              <label className="hero-booking-field" htmlFor="hero-booking-time">
                <span>期望时段</span>
                <select
                  id="hero-booking-time"
                  name="hero-booking-time"
                  value={selectedTime}
                  onChange={(event) => setSelectedTime(event.target.value)}
                  required
                >
                  <option value="">请选择</option>
                  {bookingTimeSlots.map((timeSlot) => (
                    <option key={timeSlot}>{timeSlot}</option>
                  ))}
                </select>
              </label>
              <button
                className="btn btn-primary hero-booking-submit"
                type="submit"
              >
                去预约
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </form>
          <div className="hero-actions">
            <a className="btn btn-secondary" href="#services">
              查看服务
            </a>
          </div>
        </div>
        <aside className="hero-note">
          <strong>一宠一毛巾</strong>
          <p>
            独立消毒工位、低敏浴液和专业烘干设备，减少交叉接触与等待焦虑。
          </p>
        </aside>
      </div>
    </section>
  );
}
