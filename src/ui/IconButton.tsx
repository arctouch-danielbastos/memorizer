import { ReactNode } from "react";
import styles from "ui/IconButton.module.scss";
import { ICON_CLASS } from "ui/config/contants";
import { MaterialIcon } from "@material-design-icons/font";

type Variant = "standard" | "filled" | "tonal" | "outlined";

type Props = {
  disabled?: boolean;
  type?: Variant;
  icon?: MaterialIcon;
};

const variantCx: { [variant in Variant]: keyof typeof styles } = {
  standard: styles.standard,
  filled: styles.filled,
  outlined: styles.outlined,
  tonal: styles.tonal,
};

export default function IconButton({
  disabled,
  icon,
  type = "standard",
}: Props) {
  const cx = `${styles.root} ${variantCx[type]}`;
  return (
    <button className={cx} disabled={disabled}>
      <div className={ICON_CLASS}>{icon}</div>
    </button>
  );
}
