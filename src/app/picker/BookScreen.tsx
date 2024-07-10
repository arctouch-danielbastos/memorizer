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
import nullthrows from "nullthrows";
import type { State } from "types";

type Book = { name: string; id: string };
const books = nvi.map(i => ({
  name: i.name,
  id: i.abbrev,
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
  onChoose: (bookId: Book["id"] | null) => void;
  bookId: State["book"] | null;
};

export default function BookScreen({ onChoose, bookId }: Props) {
  const navigateForward = useNavigateForward();

  const toggle = (id: string) => {
    onChoose(id === bookId ? null : id);
  };

  return (
    <div>
      <DrawerHeader pt={6}>Escolher livro</DrawerHeader>
      <DrawerBody maxH={80}>
        <UnorderedList spacing={4} sx={listStyle} styleType="none">
          {books.map(book => (
            <ListItem
              sx={sx(itemStyle, { selected: bookId === book.id })}
              onClick={() => toggle(book.id)}
              fontSize="larger"
              key={book.id}
            >
              {book.name}
            </ListItem>
          ))}
        </UnorderedList>
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button onClick={() => onChoose(nullthrows(bookId))} variant="link">
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
