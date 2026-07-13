"use client";

import type { CamperDetails } from "@/types";

import styles from "./VehicleDetails.module.css";

import { formatForm } from "@/utils";

interface Props {
  camper: CamperDetails;
}

export default function VehicleDetails({ camper }: Props) {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Vehicle details</h3>

      <ul className={styles.list}>
        <li>
          <span>Form</span>
          <span>{formatForm(camper.form)}</span>
        </li>

        <li>
          <span>Length</span>
          <span>{camper.length}</span>
        </li>

        <li>
          <span>Width</span>
          <span>{camper.width}</span>
        </li>

        <li>
          <span>Height</span>
          <span>{camper.height}</span>
        </li>

        <li>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </li>

        <li>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>

        <li>
          <span>Transmission</span>
          <span>{camper.transmission}</span>
        </li>

        <li>
          <span>Engine</span>
          <span>{camper.engine}</span>
        </li>
      </ul>
    </section>
  );
}
