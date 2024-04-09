import { ReactNode } from "react";
import styles from "ui/IconButton.module.scss";

type Props = { children: ReactNode };
export default function TopBar({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}
