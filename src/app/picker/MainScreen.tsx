import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Grid,
} from "@chakra-ui/react";
import nvi from "data/nvi";
import VersePart from "picker/VersePart";
import { useNavigate } from "picker/utils/navigations";
import { State } from "types";

type Props = { onCancel: () => void; state: State; onSave: () => void };
export default function MainScreen({ state, onCancel, onSave }: Props) {
  const navigate = useNavigate();
  const book = nvi.find(b => b.abbrev === state.book)?.name as string;

  return (
    <div>
      <DrawerHeader pt={6}>Escolher passagem</DrawerHeader>
      <DrawerBody>
        <Grid gap={6} gridTemplate="auto auto / auto auto">
          <VersePart
            full
            label="Livro"
            value={book}
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
