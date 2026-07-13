"use client";

import DatePicker from "react-datepicker";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useBooking } from "@/hooks";

import styles from "./BookingForm.module.css";
import Button from "@/components/ui/Button/Button";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  bookingDate: z.date({
    error: "Choose booking date",
  }),
  comment: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  camperId: string;
}

export default function BookingForm({ camperId }: Props) {
  const booking = useBooking();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = (data: FormData) => {
    booking.mutate(
      {
        camperId,
        booking: {
          name: data.name,
          email: data.email,
        },
      },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Book your campervan now</h2>

      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name*"
          className={styles.input}
          {...register("name")}
        />

        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}

        <input
          type="email"
          placeholder="Email*"
          className={styles.input}
          {...register("email")}
        />

        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}

        <Controller
          control={control}
          name="bookingDate"
          render={({ field }) => (
            <DatePicker
              placeholderText="Booking date*"
              selected={field.value}
              onChange={field.onChange}
              className={styles.input}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          )}
        />

        {errors.bookingDate && (
          <span className={styles.error}>{errors.bookingDate.message}</span>
        )}

        <textarea
          rows={5}
          placeholder="Comment"
          className={styles.textarea}
          {...register("comment")}
        />

        <Button type="submit" disabled={booking.isPending} fullWidth>
          {booking.isPending ? "Sending..." : "Send"}
        </Button>

        {booking.isError && (
          <p className={styles.error}>Something went wrong.</p>
        )}
      </form>
    </div>
  );
}
