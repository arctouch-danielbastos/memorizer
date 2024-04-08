import { ReactNode } from "react";
import style from "ui/Button.module.scss";

type Variant = "filled" | "tonal" | "text";

type Props = {
  children: string;
  disabled?: boolean;
  type?: Variant;
  icon?: ReactNode;
};

const variantCx: { [variant in Variant]: keyof typeof style } = {
  filled: style.filled,
  text: style.text,
  tonal: style.tonal,
};

export default function Button({
  children,
  disabled = false,
  icon,
  type = "filled",
}: Props) {
  const cx = `${style.button} ${variantCx[type]}`;
  const shouldRenderIcon = icon || type !== "text";

  return (
    <button className={cx} disabled={disabled}>
      <div className={style.state} />
      {shouldRenderIcon && <span className={style.icon}>{icon}</span>}
      <div>{children}</div>
    </button>
  );
}
