import { ReactNode } from "react";
import styles from "ui/TopBar.module.scss";

type Props = { title: string; icon: ReactNode };
export default function TopBar({ icon, title }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.headline}>{title}</div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
}
