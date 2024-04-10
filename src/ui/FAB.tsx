import style from "ui/Fab.module.scss";
import { ICON_CLASS } from "ui/config/contants";
import { MaterialIcon } from "@material-design-icons/font";

type Variant = "primary" | "secondary" | "tertiary" | "branded" | "surface";
type Size = "small" | "default" | "large";

type Props = {
  type?: Variant;
  icon: MaterialIcon;
  size?: Size;
  lowered?: boolean;
};

const variantCx: { [variant in Variant]: keyof typeof style } = {
  primary: style.primary,
  secondary: style.secondary,
  tertiary: style.tertiary,
  branded: style.branded,
  surface: style.surface,
};

const sizeCx: { [variant in Size]: keyof typeof style } = {
  small: style.small,
  default: style.default,
  large: style.large,
};

export default function FAB({
  icon,
  lowered = false,
  type = "primary",
  size = "default",
}: Props) {
  let cx = `${style.root} ${variantCx[type]} ${sizeCx[size]}`;
  if (lowered) cx += ` ${style.lowered}`;

  return (
    <button className={cx}>
      <div className={style.state} />
      <div className={ICON_CLASS}>{icon}</div>
    </button>
  );
}
