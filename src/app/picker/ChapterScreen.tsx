import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  ListItem,
  UnorderedList,
  defineStyleConfig,
} from "@chakra-ui/react";
import nvi from "data/nvi";
import { range } from "lodash";
import nullthrows from "nullthrows";
import { useNavigate, useNavigateForward } from "picker/utils/navigations";
import type { State } from "types";
import sx from "utils/sx";

const listStyle = defineStyleConfig({
  baseStyle: {
    cursor: "pointer",
    fontSize: "larger",
    py: "3",
    my: "0 !important",
    _hover: {
      bg: 'gray.50'
    },
  },
  variants: {
    selected: {
      bg: 'gray.100'
    }
  }
});

type Props = {
  onChoose: (state: State["chapter"] | null) => void;
  state: State;
};

export default function ChapterScreen({ onChoose, state }: Props) {
  const { chapter, book } = state;
  const navigate = useNavigate();
  const navigateForward = useNavigateForward();

  const chapterList = nvi.find(it => it.abbrev === book)?.chapters;
  const chapterCount = nullthrows(chapterList).length;
  const select = (id: State["chapter"]) => {
    console.log('=== select', id);
    onChoose(chapter === id ? null : id);
  };

  return (
    <div>
      <DrawerHeader pt={6}>Hebreus</DrawerHeader>
      <DrawerBody maxH={80}>
        <UnorderedList spacing={4} styleType="none">
          {range(1, chapterCount + 1).map(num => (
            <ListItem key={num} sx={sx(listStyle, { selected: chapter === num })} onClick={() => select(num)}>
              Capítulo {num}
            </ListItem>
          ))}
        </UnorderedList>
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button onClick={() => navigate("main")} variant="link">
          Voltar
        </Button>
        <Button
          variant="outline"
          isDisabled={!chapter}
          colorScheme="purple"
          onClick={() => navigateForward("chapter")}
        >
          Próximo
        </Button>
      </DrawerFooter>
    </div>
  );
}
