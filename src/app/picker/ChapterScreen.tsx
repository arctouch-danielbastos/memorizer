import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  ListItem,
  UnorderedList,
  defineStyleConfig,
} from "@chakra-ui/react";
import { range } from "lodash";
import { useNavigate, useNavigateForward } from "picker/utils/navigations";
import type { VerseReference } from "types";
import sx from "utils/sx";
import { getMaxChapterCount } from "./utils/data";

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
  onChoose: (state: VerseReference["chapter"] | null) => void;
  state: VerseReference;
};

export default function ChapterScreen({ onChoose, state }: Props) {
  const { chapter } = state;
  const navigate = useNavigate();
  const navigateForward = useNavigateForward();

  const select = (id: VerseReference["chapter"]) => {
    onChoose(chapter === id ? null : id);
  };

  return (
    <div>
      <DrawerHeader pt={6}>Hebreus</DrawerHeader>
      <DrawerBody maxH={80}>
        <UnorderedList spacing={4} styleType="none">
          {range(1, getMaxChapterCount(state) + 1).map(num => (
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
