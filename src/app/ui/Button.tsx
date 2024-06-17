import style from "ui/Button.module.scss";
import { ICON_CLASS } from "ui/config/contants";
import { MaterialIcon } from "@material-design-icons/font";

type Variant = "filled" | "tonal" | "text" | "elevated" | "outlined";

type Props = {
  children: string;
  disabled?: boolean;
  type?: Variant;
  icon?: MaterialIcon;
  onClick?: () => void;
};

const variantCx: { [variant in Variant]: keyof typeof style } = {
  elevated: style.elevated,
  filled: style.filled,
  outlined: style.outlined,
  text: style.text,
  tonal: style.tonal,
};

export default function Button({
  children,
  disabled = false,
  icon,
  type = "filled",
  onClick,
}: Props) {
  const cx = `${style.button} ${variantCx[type]}`;
  const iconDiv = icon ? <div className={ICON_CLASS}>{icon}</div> : null;
  const shouldRenderIcon = icon || type !== "text";

  return (
    <button className={cx} disabled={disabled} onClick={onClick}>
      {shouldRenderIcon && <span className={style.icon}>{iconDiv}</span>}
      <div>{children}</div>
    </button>
  );
}
