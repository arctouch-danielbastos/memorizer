import style from "ui/ProgressIndicator.module.scss";

const invariant = (value: boolean, message: string) => {
  if (!value) throw new Error(message);
};

const validateProgress = (progress: number) => {
  invariant(
    progress <= 100,
    "Invalid attempt to show a progress greater then 100"
  );
  invariant(progress > 0, "Invalid attempt to show a negative value ");
};

type Props = { progress: number; stop?: number };
export default function ProgressIndicator({ progress, stop }: Props) {
  return (
    <div
      className={style.root}
      style={{ gridTemplateColumns: `${progress}%  1fr` }}
    >
      <div className={style.active}></div>
      <div className={style.track} />
    </div>
  );
}
