import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>

          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>

          <Button href="/catalog">View Now</Button>
        </div>
      </Container>
    </section>
  );
}
