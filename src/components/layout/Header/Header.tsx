import Container from "@/components/ui/Container";

import Logo from "../Logo";
import Navigation from "../Navigation";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />

          <Navigation />
        </div>
      </Container>
    </header>
  );
}
