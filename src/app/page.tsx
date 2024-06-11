import style from "./style.module.scss";
import MemorizerApp from "components/MemorizerApp";

export default function Memorizer() {
  return (
    <main className={style.root}>
      <MemorizerApp />
    </main>
  );
}
