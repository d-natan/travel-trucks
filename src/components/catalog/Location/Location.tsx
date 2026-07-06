import { FaMapMarkerAlt } from "react-icons/fa";

import { formatLocation } from "@/utils";

import styles from "./Location.module.css";

interface Props {
  location: string;
}

export default function Location({ location }: Props) {
  return (
    <div className={styles.location}>
      <FaMapMarkerAlt className={styles.icon} />

      <span>{formatLocation(location)}</span>
    </div>
  );
}
