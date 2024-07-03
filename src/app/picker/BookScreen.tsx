import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  ListItem,
  UnorderedList,
  defineStyleConfig,
} from "@chakra-ui/react";
import { useNavigate } from "picker/utils/navigations";
import { useState } from "react";
import nvi from "data/nvi";
import { uniq } from "lodash";
import sx from "utils/sx";

const books = nvi.map(i => ({
  name: i.name,
  id: i.abbrev,
}));

const listStyle = defineStyleConfig({
  baseStyle: {
    py: 5,
    px: 3,
    m: 0,
    _hover: {
      bg: "gray.100",
      cursor: "pointer",
    },
  },
});

export default function BookScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <DrawerHeader pt={6}>Escolher livro</DrawerHeader>
      <DrawerBody maxH={80}>
        <UnorderedList spacing={4} styleType="none">
          {books.map(book => (
            <ListItem sx={sx(listStyle)} fontSize="larger" key={book.id}>
              {book.name}
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
          isDisabled={true}
          colorScheme="purple"
          onClick={() => navigate("main")}
        >
          Voltar
        </Button>
      </DrawerFooter>
    </div>
  );
}
