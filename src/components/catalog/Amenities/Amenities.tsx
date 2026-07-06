import FeatureBadge from "../FeatureBadge";

import { AMENITIES } from "@/constants/amenities";

import styles from "./Amenities.module.css";

interface AmenitiesProps {
  amenities: string[];
}

export default function Amenities({ amenities }: AmenitiesProps) {
  return (
    <div className={styles.list}>
      {amenities.map((item) => {
        const amenity = AMENITIES[item];

        if (!amenity) return null;

        return (
          <FeatureBadge key={item} icon={amenity.icon} label={amenity.label} />
        );
      })}
    </div>
  );
}
