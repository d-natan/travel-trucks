"use client";

import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

import type { CamperDetails } from "@/types";

import styles from "./CamperHeader.module.css";

import { formatLocation, formatPrice } from "@/utils";

interface Props {
  camper: CamperDetails;
}

export default function CamperHeader({ camper }: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{camper.name}</h1>

      <div className={styles.meta}>
        <div className={styles.rating}>
          <FaStar className={styles.star} />

          <span>
            {camper.rating} ({camper.totalReviews} Reviews)
          </span>
        </div>

        <div className={styles.location}>
          <FaMapMarkerAlt className={styles.marker} />

          <span>{formatLocation(camper.location)}</span>
        </div>
      </div>

      <p className={styles.price}>{formatPrice(camper.price)}</p>
    </header>
  );
}
