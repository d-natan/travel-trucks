import { FaStar } from "react-icons/fa";

import styles from "./Rating.module.css";

interface RatingProps {
  rating: number;
  reviews: number;
}

export default function Rating({ rating, reviews }: RatingProps) {
  return (
    <div className={styles.rating}>
      <FaStar className={styles.star} />

      <span>
        {rating.toFixed(1)} ({reviews} Reviews)
      </span>
    </div>
  );
}
