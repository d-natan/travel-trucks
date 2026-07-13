"use client";

import { useState } from "react";

import type { CamperDetails, Review } from "@/types";

import BookingForm from "../BookingForm";
import Features from "../Features";
import Reviews from "../Reviews";

import styles from "./CamperTabs.module.css";

type Tab = "features" | "reviews";

interface Props {
  camper: CamperDetails;
  reviews: Review[];
}

export default function CamperTabs({ camper, reviews }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("features");

  return (
    <>
      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${
            activeTab === "features" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>

        <button
          type="button"
          className={`${styles.tab} ${
            activeTab === "reviews" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          {activeTab === "features" ? (
            <Features camper={camper} />
          ) : (
            <Reviews reviews={reviews} />
          )}
        </div>

        <aside className={styles.right}>
          <BookingForm camperId={camper.id} />
        </aside>
      </div>
    </>
  );
}
