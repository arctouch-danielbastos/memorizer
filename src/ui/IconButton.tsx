import { ReactNode } from "react";
import styles from "ui/IconButton.module.scss";
import { ICON_CLASS } from "./contants";
import { MaterialIcon } from "@material-design-icons/font";

type Variant = "filled" | "tonal" | "outlined";

type Props = {
  disabled?: boolean;
  type?: Variant;
  icon?: MaterialIcon;
};

const variantCx: { [variant in Variant]: keyof typeof styles } = {
  filled: styles.filled,
  outlined: styles.outlined,
  tonal: styles.tonal,
};

export default function TopBar({ disabled, icon, type = "filled" }: Props) {
  const cx = `${styles.root} ${variantCx[type]}`;
  return (
    <button className={cx} disabled={disabled}>
      <div className={styles.state}></div>
      <div className={ICON_CLASS}>{icon}</div>
    </button>
  );
}