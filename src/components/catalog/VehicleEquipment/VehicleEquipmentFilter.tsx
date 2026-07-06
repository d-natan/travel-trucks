"use client";

import {
  MdOutlineAcUnit,
  MdOutlineBathroom,
  MdOutlineKitchen,
  MdOutlineWaterDrop,
} from "react-icons/md";

import { PiTelevisionSimple } from "react-icons/pi";

import { TbAutomaticGearbox } from "react-icons/tb";

import FilterCard from "../FilterCard";

import styles from "./VehicleEquipmentFilter.module.css";

interface Props {
  transmission: "" | "automatic" | "manual";
  onTransmissionChange: (value: "" | "automatic") => void;
}

export default function VehicleEquipmentFilter({
  transmission,
  onTransmissionChange,
}: Props) {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Vehicle equipment</h3>

      <div className={styles.grid}>
        <FilterCard
          icon={MdOutlineAcUnit}
          label="AC"
          active={false}
          disabled
          onClick={() => {}}
        />

        <FilterCard
          icon={TbAutomaticGearbox}
          label="Automatic"
          active={transmission === "automatic"}
          onClick={() =>
            onTransmissionChange(
              transmission === "automatic" ? "" : "automatic",
            )
          }
        />

        <FilterCard
          icon={MdOutlineKitchen}
          label="Kitchen"
          active={false}
          disabled
          onClick={() => {}}
        />

        <FilterCard
          icon={PiTelevisionSimple}
          label="TV"
          active={false}
          disabled
          onClick={() => {}}
        />

        <FilterCard
          icon={MdOutlineBathroom}
          label="Bathroom"
          active={false}
          disabled
          onClick={() => {}}
        />

        <FilterCard
          icon={MdOutlineWaterDrop}
          label="Water"
          active={false}
          disabled
          onClick={() => {}}
        />
      </div>
    </section>
  );
}
