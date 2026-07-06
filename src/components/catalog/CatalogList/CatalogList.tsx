"use client";

import CamperCard from "../CamperCard";

import type { CamperListItem } from "@/types";

import styles from "./CatalogList.module.css";

interface Props {
  campers: CamperListItem[];
}

export default function CatalogList({ campers }: Props) {
  return (
    <div className={styles.list}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
}
