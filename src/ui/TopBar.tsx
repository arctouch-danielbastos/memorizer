import { ReactNode } from "react";
import styles from "ui/TopBar.module.scss";

type Props = { title: string; right: ReactNode };
export default function TopBar({ right, title }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.headline}>{title}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
}
