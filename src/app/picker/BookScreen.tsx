import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  ListItem,
  UnorderedList,
  defineStyleConfig,
} from "@chakra-ui/react";
import { useNavigate, useNavigateForward } from "picker/utils/navigations";
import nvi from "data/nvi";
import sx from "utils/sx";
import type { VerseReference } from "types";

const books = nvi.map(i => ({
  id: i.id,
  name: i.name,
}));

const listStyle = { mx: 0 };

const itemStyle = defineStyleConfig({
  baseStyle: {
    py: 4,
    px: 3,
    m: "0 !important", // i hate css libraries
    _hover: {
      bg: "gray.100",
      cursor: "pointer",
    },
  },
  variants: {
    selected: {
      bg: "gray.50",
    },
  },
});

type Props = {
  onChoose: (bookId: VerseReference["bookId"] | null) => void;
  state: VerseReference;
};

export default function BookScreen({ onChoose, state }: Props) {
  const { bookId } = state;
  const navigate = useNavigate();
  const navigateForward = useNavigateForward();

  const toggle = (id: string) => {
    onChoose(id === bookId ? null : id);
  };

  return (
    <div>
      <DrawerHeader pt={6}>Escolher livro</DrawerHeader>
      <DrawerBody maxH={80}>
        <UnorderedList spacing={4} sx={listStyle} styleType="none">
          {books.map(cur => (
            <ListItem sx={sx(itemStyle, { selected: bookId === cur.id })} onClick={() => toggle(cur.id)}
              fontSize="larger"
              key={cur.id}
            >
              {cur.name}
            </ListItem>
          ))}
        </UnorderedList>
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button onClick={() => navigate('main')} variant="link">
          Voltar
        </Button>
        <Button
          variant="outline"
          isDisabled={bookId === null}
          colorScheme="purple"
          onClick={() => navigateForward("book")}
        >
          Próximo
        </Button>
      </DrawerFooter>
    </div>
  );
}
