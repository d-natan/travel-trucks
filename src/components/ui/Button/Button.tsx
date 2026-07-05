import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [styles.button, fullWidth ? styles.fullWidth : "", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
