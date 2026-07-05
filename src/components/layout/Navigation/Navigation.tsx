"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./Navigation.module.css";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/catalog",
    label: "Catalog",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                styles.link,
                pathname === link.href && styles.active,
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
