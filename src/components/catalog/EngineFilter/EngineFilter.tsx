"use client";

import { MdLocalGasStation, MdElectricBolt } from "react-icons/md";
import { PiEngineBold } from "react-icons/pi";
import { TbLeaf } from "react-icons/tb";

import FilterCard from "../FilterCard";

import styles from "./EngineFilter.module.css";

import type { Engine } from "@/types";

interface Props {
  value: Engine | "";
  onChange: (value: Engine | "") => void;
}

interface Props {
  value: Engine;
  onChange: (value: Engine) => void;
}

export default function EngineFilter({ value, onChange }: Props) {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Engine</h3>

      <div className={styles.grid}>
        <FilterCard
          icon={PiEngineBold}
          label="Diesel"
          active={value === "diesel"}
          onClick={() => onChange(value === "diesel" ? "" : "diesel")}
        />

        <FilterCard
          icon={MdLocalGasStation}
          label="Petrol"
          active={value === "petrol"}
          onClick={() => onChange(value === "petrol" ? "" : "petrol")}
        />

        <FilterCard
          icon={TbLeaf}
          label="Hybrid"
          active={value === "hybrid"}
          onClick={() => onChange(value === "hybrid" ? "" : "hybrid")}
        />

        <FilterCard
          icon={MdElectricBolt}
          label="Electric"
          active={value === "electric"}
          onClick={() => onChange(value === "electric" ? "" : "electric")}
        />
      </div>
    </section>
  );
}
