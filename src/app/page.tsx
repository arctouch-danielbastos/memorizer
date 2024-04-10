import style from "./style.module.scss";
import FAB from "ui/FAB";
import IconButton from "ui/IconButton";
import ProgressIndicator from "ui/ProgressIndicator";
import TopBar from "ui/TopBar";

export default function Memorizer() {
  return (
    <main className={style.root}>
      <TopBar
        title="Hebreus 4:14-16"
        right={<IconButton type="tonal" icon="book" />}
      />
      <div className={style.body}>
        <div className={style.progress}>
          <ProgressIndicator progress={30} />
        </div>
        <div className={style.controls}>
          <IconButton icon="skip_previous" />
          <FAB type="surface" size="default" icon="play_arrow" />
          <IconButton icon="remove_red_eye" />
        </div>
      </div>
    </main>
  );
}
