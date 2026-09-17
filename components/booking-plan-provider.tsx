"use client";

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type BookingPlanContextValue = {
  selectedPlan: string;
  setSelectedPlan: Dispatch<SetStateAction<string>>;
  choosePlan: (plan: string) => void;
};

const BookingPlanContext = createContext<BookingPlanContextValue | null>(null);

export function BookingPlanProvider({ children }: { children: ReactNode }) {
  const [selectedPlan, setSelectedPlan] = useState("");

  const choosePlan = useCallback((plan: string) => {
    setSelectedPlan(plan);

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

  const value = useMemo(
    () => ({ selectedPlan, setSelectedPlan, choosePlan }),
    [choosePlan, selectedPlan],
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
