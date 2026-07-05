import styles from "./Loader.module.css";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
}

export default function Loader({ size = "md" }: LoaderProps) {
  return (
    <div className={styles.wrapper}>
      <span className={`${styles.loader} ${styles[size]}`} />
    </div>
  );
}
