import Link from "next/link";

import Button from "@/components/ui/Button";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.code}>404</h1>

      <h2 className={styles.title}>Page not found</h2>

      <p className={styles.text}>
        The page you are looking for does not exist.
      </p>

      <Link href="/">
        <Button>Back Home</Button>
      </Link>
    </main>
  );
}
