"use client";

import { FaMapMarkerAlt } from "react-icons/fa";

import styles from "./LocationFilter.module.css";

interface LocationFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export default function LocationFilter({
  value,
  onChange,
}: LocationFilterProps) {
  return (
    <section className={styles.wrapper}>
      <label htmlFor="location" className={styles.label}>
        Location
      </label>

      <div className={styles.inputWrapper}>
        <FaMapMarkerAlt className={styles.icon} />

        <input
          id="location"
          type="text"
          value={value}
          placeholder="City"
          autoComplete="off"
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
        />
      </div>
    </section>
  );
}
