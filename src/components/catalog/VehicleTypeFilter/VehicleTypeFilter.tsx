"use client";

import {
  AlcoveIcon,
  IntegratedIcon,
  PanelVanIcon,
  SemiIntegratedIcon,
} from "@/components/icons/CamperIcons";

import FilterCard from "../FilterCard";

import styles from "./VehicleTypeFilter.module.css";

type FormType = "" | "alcove" | "panel_van" | "integrated" | "semi_integrated";

interface Props {
  value: FormType;
  onChange: (value: FormType) => void;
}

export default function VehicleTypeFilter({ value, onChange }: Props) {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Vehicle type</h3>

      <div className={styles.grid}>
        <FilterCard
          icon={AlcoveIcon}
          label="Alcove"
          active={value === "alcove"}
          onClick={() => onChange(value === "alcove" ? "" : "alcove")}
        />

        <FilterCard
          icon={PanelVanIcon}
          label="Panel Van"
          active={value === "panel_van"}
          onClick={() => onChange(value === "panel_van" ? "" : "panel_van")}
        />

        <FilterCard
          icon={IntegratedIcon}
          label="Integrated"
          active={value === "integrated"}
          onClick={() => onChange(value === "integrated" ? "" : "integrated")}
        />

        <FilterCard
          icon={SemiIntegratedIcon}
          label="Semi Integrated"
          active={value === "semi_integrated"}
          onClick={() =>
            onChange(value === "semi_integrated" ? "" : "semi_integrated")
          }
        />
      </div>
    </section>
  );
}
