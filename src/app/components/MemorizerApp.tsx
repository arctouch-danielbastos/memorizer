"use client";

import { useMemo, useState } from "react";
import FAB from "ui/FAB";
import TopBar from "ui/TopBar";
import showWordStart, { type HideSpec } from "utils/strategy";
import { getPercentageDone, hidePrevious, revealNext } from "utils/spec";
import {
  Box,
  Container,
  Flex,
  Grid,
  IconButton,
  Progress,
  Text,
  defineStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import Icon from "ui/Icon";

const VERSES = [
  "Portanto, visto que temos um grande sumo sacerdote que adentrou os céus, Jesus, o Filho de Deus, apeguemo-nos com toda a firmeza à fé que professamos,",
  "pois não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas, mas sim alguém que, como nós, passou por todo tipo de tentação, porém, sem pecado.",
  "Assim sendo, aproximemo-nos do trono da graça com toda a confiança, a fim de recebermos misericórdia e encontrarmos graça que nos ajude no momento da necessidade.",
];

const STRATEGY = showWordStart({ lettersToShow: 1 });
const initialState = STRATEGY.obfuscate(VERSES);

type Part = HideSpec["hiddenForm"][0];
type Props = { spec: HideSpec; isPeeking: boolean };

const hidden = {
  color: "transparent",
  borderBottom: "1px solid",
  borderBottomColor: "gray.900",
};

function Word({ spec, isPeeking }: Props) {
  const getSx = (part: Part) => {
    const isHidden = !isPeeking && spec.isHidden && !part.show;
    return isHidden ? hidden : {};
  };

  return (
    <span>
      {spec.hiddenForm.map(part => (
        <Box as="span" __css={getSx(part)} key={part.letters}>
          {part.letters}
        </Box>
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

  const renderPlay = () => <FAB icon="play_arrow" onClick={next} />;
  const renderReset = () => <FAB icon="repeat" onClick={reset} />;

  return (
    <Grid h="full" templateRows="auto 1fr auto auto">
      <TopBar
        title="Hebreus 4:14-16"
        right={
          <IconButton
            isRound={true}
            aria-label=""
            icon={<Icon name="book" />}
          />
        }
      />

      <Text
        display="flex"
        fontSize="lg"
        flexWrap="wrap"
        p={5}
        gap={1}
        as="article"
      >
        {words.map(i => (
          <Word key={i.raw} isPeeking={isPeeking} spec={i} />
        ))}
      </Text>

      <Container>
        <Progress colorScheme="purple" size="xs" value={progress} />
      </Container>
      <Flex py={12} align="center" justify="center" gap={10}>
        <IconButton
          aria-label=""
          icon={<Icon name="skip_previous" />}
          onClick={undo}
        />
        {progress !== 100 ? renderPlay() : renderReset()}
        <IconButton
          aria-label=""
          icon={<Icon name="remove_red_eye" />}
          onClick={togglePeek}
        />
      </Flex>
    </Grid>
  );
}
