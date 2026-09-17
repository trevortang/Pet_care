"use client";

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useEffect,
  useContext,
  useMemo,
  useState,
} from "react";

type BookingPlanContextValue = {
  minDate: string;
  selectedPlan: string;
  setSelectedPlan: Dispatch<SetStateAction<string>>;
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  selectedTime: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
  choosePlan: (plan: string) => void;
  chooseBookingTime: (date: string, time: string) => void;
};

const BookingPlanContext = createContext<BookingPlanContextValue | null>(null);

export function BookingPlanProvider({ children }: { children: ReactNode }) {
  const [minDate, setMinDate] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    setMinDate(`${year}-${month}-${day}`);
  }, []);

  const scrollToBooking = useCallback(() => {
    window.requestAnimationFrame(() => {
      const bookingSection = document.querySelector("#booking");

      if (!bookingSection) {
        return;
      }

      const top =
        bookingSection.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({ top, behavior: "smooth" });
    });
  }, []);

  const choosePlan = useCallback(
    (plan: string) => {
      setSelectedPlan(plan);
      scrollToBooking();
    },
    [scrollToBooking],
  );

  const chooseBookingTime = useCallback(
    (date: string, time: string) => {
      setSelectedDate(date);
      setSelectedTime(time);
      scrollToBooking();
    },
    [scrollToBooking],
  );

  const value = useMemo(
    () => ({
      minDate,
      selectedPlan,
      setSelectedPlan,
      selectedDate,
      setSelectedDate,
      selectedTime,
      setSelectedTime,
      choosePlan,
      chooseBookingTime,
    }),
    [
      chooseBookingTime,
      choosePlan,
      minDate,
      selectedDate,
      selectedPlan,
      selectedTime,
    ],
  );

  return (
    <BookingPlanContext.Provider value={value}>
      {children}
    </BookingPlanContext.Provider>
  );
}

export function useBookingPlan() {
  const context = useContext(BookingPlanContext);

  if (!context) {
    throw new Error("useBookingPlan must be used inside BookingPlanProvider");
  }

  return context;
}
