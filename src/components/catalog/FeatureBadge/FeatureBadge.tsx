import type { IconType } from "react-icons";

import styles from "./FeatureBadge.module.css";

interface FeatureBadgeProps {
  icon: IconType;
  label: string;
}

export default function FeatureBadge({ icon: Icon, label }: FeatureBadgeProps) {
  return (
    <div className={styles.badge}>
      <Icon className={styles.icon} />

      <span>{label}</span>
    </div>
  );
}
