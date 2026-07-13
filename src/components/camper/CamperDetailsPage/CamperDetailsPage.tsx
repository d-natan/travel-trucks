"use client";

import { useCamper } from "@/hooks/useCamper";
import { useReviews } from "@/hooks/useReviews";

import Loader from "@/components/ui/Loader";

import CamperHeader from "../CamperHeader";
import styles from "./CamperDetailsPage.module.css";

import CamperGallery from "../CamperGallery";
import CamperTabs from "../CamperTabs";

interface Props {
  camperId: string;
}

export default function CamperDetailsPage({ camperId }: Props) {
  const {
    data: camper,
    isLoading: camperLoading,
    isError: camperError,
  } = useCamper(camperId);

  const { data: reviews = [], isLoading: reviewsLoading } =
    useReviews(camperId);

  if (camperLoading || reviewsLoading) {
    return <Loader />;
  }

  if (camperError || !camper) {
    return <main className={styles.error}>Camper not found.</main>;
  }

  return (
    <main className={styles.page}>
      <CamperHeader camper={camper} />

      <CamperGallery gallery={camper.gallery} camperName={camper.name} />

      {/* Gallery */}

      <p className={styles.description}>{camper.description}</p>

      <CamperTabs camper={camper} reviews={reviews} />

      {/* Booking */}
    </main>
  );
}
