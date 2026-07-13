"use client";

import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";

import FilterCard from "../FilterCard";

import styles from "./TransmissionFilter.module.css";

type Transmission = "" | "automatic" | "manual";

interface Props {
  value: Transmission;
  onChange: (value: Transmission) => void;
}

export default function TransmissionFilter({ value, onChange }: Props) {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Transmission</h3>

      <div className={styles.grid}>
        <FilterCard
          icon={TbAutomaticGearbox}
          label="Automatic"
          active={value === "automatic"}
          onClick={() => onChange(value === "automatic" ? "" : "automatic")}
        />

        <FilterCard
          icon={TbManualGearbox}
          label="Manual"
          active={value === "manual"}
          onClick={() => onChange(value === "manual" ? "" : "manual")}
        />
      </div>
    </section>
  );
}
