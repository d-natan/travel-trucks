import { formatPrice } from "@/utils";

import styles from "./Price.module.css";

interface Props {
  price: number;
}

export default function Price({ price }: Props) {
  return <span className={styles.price}>{formatPrice(price)}</span>;
}
