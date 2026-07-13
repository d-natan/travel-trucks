"use client";

import Image from "next/image";

import type { CamperImage } from "@/types";

import styles from "./CamperGallery.module.css";

interface Props {
  gallery: CamperImage[];
  camperName: string;
}

export default function CamperGallery({ gallery, camperName }: Props) {
  return (
    <section className={styles.gallery}>
      {gallery.map((image) => (
        <div key={image.id} className={styles.imageWrapper}>
          <Image
            src={image.original}
            alt={camperName}
            fill
            className={styles.image}
            sizes="(max-width:768px) 100vw, 292px"
            priority={image.order === 1}
          />
        </div>
      ))}
    </section>
  );
}
