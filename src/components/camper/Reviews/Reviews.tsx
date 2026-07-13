"use client";

import { FaStar, FaRegStar } from "react-icons/fa";

import type { Review } from "@/types";

import styles from "./Reviews.module.css";

interface Props {
  reviews: Review[];
}

export default function Reviews({ reviews }: Props) {
  return (
    <div className={styles.wrapper}>
      {reviews.map((review) => (
        <article key={review.id} className={styles.review}>
          <header className={styles.header}>
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h3 className={styles.name}>{review.reviewer_name}</h3>

              <div className={styles.rating}>
                {Array.from({ length: 5 }).map((_, index) =>
                  index < review.reviewer_rating ? (
                    <FaStar key={index} className={styles.starFilled} />
                  ) : (
                    <FaRegStar key={index} className={styles.starEmpty} />
                  ),
                )}
              </div>
            </div>
          </header>

          <p className={styles.comment}>{review.comment}</p>
        </article>
      ))}
    </div>
  );
}
