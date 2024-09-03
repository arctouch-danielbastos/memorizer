"use client";

import { useMemo, useState } from "react";
import showWordStart from "utils/strategy";
import { getPercentageDone, hidePrevious, revealNext } from "utils/spec";
import { Container, Grid, Progress, useDisclosure } from "@chakra-ui/react";
import ButtonSection from "components/ButtonSection";
import TopBar from "components/TopBar";
import VerseText from "components/VerseText";
import VersePicker from "picker";
import type { VerseReference } from "types";
import { getVerseText } from "picker/utils/data";

const VERSES = [
  "Portanto, visto que temos um grande sumo sacerdote que adentrou os céus, Jesus, o Filho de Deus, apeguemo-nos com toda a firmeza à fé que professamos,",
  "pois não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas, mas sim alguém que, como nós, passou por todo tipo de tentação, porém, sem pecado.",
  "Assim sendo, aproximemo-nos do trono da graça com toda a confiança, a fim de recebermos misericórdia e encontrarmos graça que nos ajude no momento da necessidade.",
];

const STRATEGY = showWordStart({ lettersToShow: 1 });
const initialState = STRATEGY.obfuscate(VERSES);

export default function MemorizerApp() {
  const [words, setWords] = useState(initialState);
  const [isPeeking, setIsPeeking] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChangeVerse = (reference: VerseReference) => {
    onClose();
    const text = getVerseText(reference);
    setWords(STRATEGY.obfuscate(text));
  }

  const progress = useMemo(
    () => getPercentageDone(words, STRATEGY.canBeHidden),
    [words]
  );

  const next = () => {
    if (isPeeking) return;
    setWords(list => revealNext(list));
  };

  const undo = () => {
    if (isPeeking) return;
    setWords(list => hidePrevious(list, STRATEGY.canBeHidden));
  };

  return (
    <Grid h="full" templateRows="auto 1fr auto auto">
      <TopBar onClickIcon={onOpen} title="Hebreus 4:14-16" />

      <VerseText words={words} isPeeking={isPeeking} />
      <Container>
        <Progress colorScheme="purple" size="xs" value={progress} />
      </Container>
      <ButtonSection
        onClickPeeking={() => setIsPeeking(is => !is)}
        onClickPlay={next}
        onClickReset={() => setWords(initialState)}
        onClickUndo={undo}
        progress={progress}
      />
      <VersePicker isOpen={isOpen} onClose={onClose} onSave={onChangeVerse} />
    </Grid>
  );
}
