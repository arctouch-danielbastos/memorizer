import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Grid,
} from "@chakra-ui/react";
import VersePart from "picker/VersePart";
import { useState } from "react";

export default function MainScreen({
  onClickBook,
  onClickChaper,
  onClickVerse,
}: {
  onClickBook?: () => void;
  onClickChaper?: () => void;
  onClickVerse?: () => void;
}) {
  const [state] = useState({
    verses: [1, 10],
    chapter: 1,
    book: "Hebreus",
  });

  return (
    <div>
      <DrawerHeader pt={6}>Escolher passagem</DrawerHeader>
      <DrawerBody>
        <Grid gap={6} gridTemplate="auto auto / auto auto">
          <VersePart
            full
            label="Livro"
            value={state.book}
            onChoose={onClickBook}
          />
          <VersePart
            label="Capítulo"
            onChoose={onClickChaper}
            value={`${state.chapter}`}
          />
          <VersePart
            label="Versículo"
            onChoose={onClickVerse}
            value={`${state.verses[0]} ao ${state.verses[1]}`}
          />
        </Grid>
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button variant="link">Cancelar</Button>
        <Button colorScheme="purple">Decorar</Button>
      </DrawerFooter>
    </div>
  );
}
