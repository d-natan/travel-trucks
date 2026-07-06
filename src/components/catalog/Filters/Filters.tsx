"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";

import type { CamperFilters, CamperForm, Engine, Transmission } from "@/types";

import EngineFilter from "../EngineFilter";
import LocationFilter from "../LocationFilter";
import TransmissionFilter from "../TransmissionFilter";
import VehicleTypeFilter from "../VehicleTypeFilter";

import styles from "./Filters.module.css";

interface FiltersProps {
  initialFilters?: CamperFilters;
  onSearch: (filters: CamperFilters) => void;
}

export default function Filters({ initialFilters, onSearch }: FiltersProps) {
  const [location, setLocation] = useState(initialFilters?.location ?? "");

  const [form, setForm] = useState<CamperForm | "">(initialFilters?.form ?? "");

  const [engine, setEngine] = useState<Engine | "">(
    initialFilters?.engine ?? "",
  );

  const [transmission, setTransmission] = useState<Transmission | "">(
    initialFilters?.transmission ?? "",
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearch({
      location: location.trim() || undefined,
      form: form || undefined,
      engine: engine || undefined,
      transmission: transmission || undefined,
    });
  };

  return (
    <aside className={styles.filters}>
      <form onSubmit={handleSubmit}>
        <LocationFilter value={location} onChange={setLocation} />

        <VehicleTypeFilter value={form} onChange={setForm} />

        <EngineFilter value={engine} onChange={setEngine} />

        <TransmissionFilter value={transmission} onChange={setTransmission} />

        <Button type="submit" className={styles.button}>
          Search
        </Button>
      </form>
    </aside>
  );
}
