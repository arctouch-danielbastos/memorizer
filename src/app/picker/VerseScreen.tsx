import {
  Button,
  Center,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  SimpleGrid,
  defineStyleConfig,
} from "@chakra-ui/react";
import { range } from "lodash";
import sx from "utils/sx";
import { useNavigate, useNavigateForward } from "picker/utils/navigations";
import { State } from "types";
import { getMaxVerseCount } from "./utils/data";

const verseStyle = defineStyleConfig({
  baseStyle: {
    w: "48px",
    h: "48px",
    bg: "purple.50",
    cursor: "pointer",
    _hover: {
      bg: "purple.100",
      cursor: "pointer",
    },
  },
  variants: {
    start: { borderLeftRadius: 3 },
    end: { borderRightRadius: 3 },
    selected: {
      bg: "purple.200",
    },
  },
});

type PickerProps = { state: State; onClick: (verse: number) => void };

function RangePicker({ onClick, state }: PickerProps) {
  const { verses } = state;

  const isSelected = (i: number) => {
    if (verses === null) return false;
    if (verses.length === 0) return false;
    if (verses.length === 1) return i === verses[0];
    return verses[0] <= i && verses[1] >= i;
  }

  const isStart = (num: number) => {
    if (!verses) return false;
    return num === verses[0];
  }

  const isEnd = (num: number) => {
    if (!verses) return false;
    if (verses.length === 1) return isStart(num);
    return num === verses[1];
  }

  return (
    <SimpleGrid justifyContent="center" bg="purple.50" py={6} px={3} borderRadius="md" columns={7}>
      {range(0, getMaxVerseCount(state)).map(num => (
        <Center sx={sx(verseStyle, { selected: isSelected(num), start: isStart(num), end: isEnd(num) })} onClick={() => onClick(num)} key={num}>
          {num}
        </Center>
      ))}
    </SimpleGrid>
  );
}

type Props = {
  onChoose: (state: State["verses"] | null) => void;
  state: State;
};

export default function VerseScreen({ onChoose, state }: Props) {
  const navigate = useNavigate();
  const navigateForward = useNavigateForward();

  const { verses } = state;
  const select = (verse: number) => {
    onChoose(verses?.length === 1 && verses[0] < verse ? [verses[0], verse] : [verse])
  };

  return (
    <div>
      <DrawerHeader pt={6}>Capítulo 14</DrawerHeader>
      <DrawerBody maxH={80}>
        <RangePicker state={state} onClick={select} />
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button onClick={() => navigate("main")} variant="link">
          Voltar
        </Button>
        <Button
          variant="outline"
          isDisabled={!verses || verses.length === 0}
          colorScheme="purple"
          onClick={() => navigateForward("verse")}
        >
          Próximo
        </Button>
      </DrawerFooter>
    </div>
  );
}
