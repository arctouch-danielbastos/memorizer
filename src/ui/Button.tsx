import { ReactNode } from "react";
import style from "ui/Button.module.css";

type Variant = "filled" | "tonal" | "text";

type Props = { children: string; type?: Variant; icon?: ReactNode };

const variantCx: { [variant in Variant]: keyof typeof style } = {
  filled: style.filled,
  text: style.text,
  tonal: style.tonal,
};

export default function Button({ children, icon, type = "filled" }: Props) {
  const cx = `${style.button} ${variantCx[type]}`;
  const shouldRenderIcon = icon || type !== "text";

  return (
    <button className={cx}>
      {shouldRenderIcon && <span className={style.icon}>{icon}</span>}
      {children}
    </button>
  );
}
