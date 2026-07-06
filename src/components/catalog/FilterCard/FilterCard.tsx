"use client";

import clsx from "clsx";
import { IconType } from "react-icons";

import styles from "./FilterCard.module.css";

interface FilterCardProps {
  icon: IconType;
  label: string;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export default function FilterCard({
  icon: Icon,
  label,
  active,
  disabled = false,
  onClick,
}: FilterCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        styles.card,
        active && styles.active,
        disabled && styles.disabled,
      )}
    >
      <Icon size={32} className={styles.icon} />

      <span>{label}</span>
    </button>
  );
}
