import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Grid,
} from "@chakra-ui/react";
import VersePart from "picker/VersePart";
import { useNavigate } from "picker/utils/navigations";
import { useState } from "react";

type Props = { onCancel: () => void; onSave: () => void };
export default function MainScreen({ onCancel, onSave }: Props) {
  const navigate = useNavigate();

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
            onChoose={() => navigate("book")}
          />
          <VersePart
            label="Capítulo"
            onChoose={() => navigate("chapter")}
            value={`${state.chapter}`}
          />
          <VersePart
            label="Versículo"
            onChoose={() => navigate("verse")}
            value={`${state.verses[0]} ao ${state.verses[1]}`}
          />
        </Grid>
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button variant="link" onClick={onCancel}>
          Cancelar
        </Button>
        <Button colorScheme="purple" onClick={onSave}>
          Decorar
        </Button>
      </DrawerFooter>
    </div>
  );
}
