import Image from "next/image";
import Link from "next/link";

import Amenities from "../Amenities";
import Location from "../Location";
import Price from "../Price";
import Rating from "../Rating";

import Button from "@/components/ui/Button";

import type { CamperListItem } from "@/types";

import styles from "./CamperCard.module.css";

import FavoriteButton from "@/components/common/FavoriteButton";

interface CamperCardProps {
  camper: CamperListItem;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={camper.coverImage}
          alt={camper.name}
          fill
          className={styles.image}
          sizes="292px"
          priority={false}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>

          <div className={styles.actions}>
            <Price price={camper.price} />

            <FavoriteButton camperId={camper.id} />
          </div>
        </div>

        <div className={styles.info}>
          <Rating rating={camper.rating} reviews={camper.totalReviews} />

          <Location location={camper.location} />
        </div>

        <p className={styles.description}>{camper.description}</p>

        <Amenities amenities={camper.amenities} />

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
          className={styles.link}
        >
          <Button>Show more</Button>
        </Link>
      </div>
    </article>
  );
}
