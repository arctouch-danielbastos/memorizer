"use client";

import { useMemo, useState } from "react";
import style from "./style.module.scss";
import FAB from "ui/FAB";
import IconButton from "ui/IconButton";
import ProgressIndicator from "ui/ProgressIndicator";
import TopBar from "ui/TopBar";
import showWordStart, { type HideSpec } from "utils/strategy";
import { getPercentageDone, hidePrevious, revealNext } from "utils/spec";
import cx from "classnames";

const VERSES = [
  "Portanto, visto que temos um grande sumo sacerdote que adentrou os céus, Jesus, o Filho de Deus, apeguemo-nos com toda a firmeza à fé que professamos,",
  "pois não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas, mas sim alguém que, como nós, passou por todo tipo de tentação, porém, sem pecado.",
  "Assim sendo, aproximemo-nos do trono da graça com toda a confiança, a fim de recebermos misericórdia e encontrarmos graça que nos ajude no momento da necessidade.",
];

const STRATEGY = showWordStart({ lettersToShow: 1 });
const initialState = STRATEGY.obfuscate(VERSES);

type Part = HideSpec["hiddenForm"][0];
type Props = { spec: HideSpec; isPeeking: boolean };

function Word({ spec, isPeeking }: Props) {
  const getClasses = (part: Part) =>
    cx({ [style.hidden]: !isPeeking && spec.isHidden && !part.show });

  return (
    <span className="word">
      {spec.hiddenForm.map(part => (
        <span className={getClasses(part)} key={part.letters}>
          {part.letters}
        </span>
      ))}
    </span>
  );
}

export default function MemorizerApp() {
  const [words, setWords] = useState(initialState);
  const [isPeeking, setIsPeeking] = useState(false);
  const progress = useMemo(
    () => getPercentageDone(words, STRATEGY.canBeHidden),
    [words]
  );

  const reset = () => setWords(initialState);

  const next = () => {
    if (isPeeking) return;
    setWords(list => revealNext(list));
  };

  const undo = () => {
    if (isPeeking) return;
    setWords(list => hidePrevious(list, STRATEGY.canBeHidden));
  };

  const togglePeek = () => setIsPeeking(is => !is);

  const renderPlay = () => (
    <FAB type="surface" size="default" icon="play_arrow" onClick={next} />
  );

  const renderReset = () => (
    <FAB type="surface" size="default" icon="repeat" onClick={reset} />
  );

  return (
    <main className={style.root}>
      <TopBar
        title="Hebreus 4:14-16"
        right={<IconButton type="tonal" icon="book" />}
      />
      <div className={style.body}>
        <article>
          {words.map(i => (
            <Word key={i.raw} isPeeking={isPeeking} spec={i} />
          ))}
        </article>
        <div className={style.progress}>
          <ProgressIndicator progress={progress} />
        </div>
        <div className={style.controls}>
          <IconButton icon="skip_previous" onClick={undo} />
          {progress !== 100 ? renderPlay() : renderReset()}
          <IconButton icon="remove_red_eye" onClick={togglePeek} />
        </div>
      </div>
    </main>
  );
}
