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
        <article>
          Portanto, visto que temos um grande sumo sacerdote que adentrou os céus, Jesus, o Filho de Deus, apeguemo‑nos com toda a firmeza ao que confessamos, pois não temos um sumo sacerdote que não possa compadecer‑se das nossas fraquezas, mas sim alguém que, como nós,passou por todo tipo de tentação, ainda que sem pecado. A___, a______‑n__ d_ t____ da g____ c__ t___ a c_________, a f__ de r_________ m___________ e e__________ g____ q__ n__ a____ no m_______ da n__________. 
        </article>
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
