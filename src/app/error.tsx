"use client";

import { useEffect } from "react";

import Button from "@/components/ui/Button";

import styles from "./error.module.css";

interface Props {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Something went wrong</h1>

      <p className={styles.text}>An unexpected error occurred.</p>

      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
