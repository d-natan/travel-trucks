"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createBooking } from "@/services";
import type { BookingRequest } from "@/types";

interface BookingVariables {
  camperId: string;
  booking: BookingRequest;
}

export function useBooking() {
  return useMutation({
    mutationFn: ({ camperId, booking }: BookingVariables) =>
      createBooking(camperId, booking),

    onSuccess: (response) => {
      toast.success(response.message);
    },

    onError: () => {
      toast.error("Booking failed. Please try again.");
    },
  });
}
