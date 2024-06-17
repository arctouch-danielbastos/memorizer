import { ICON_CLASS } from "ui/config/contants";

type Props = { name: string };

export default function Icon({ name }: Props) {
  return <div className={ICON_CLASS}>{name}</div>;
}
