import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Grid,
} from "@chakra-ui/react";
import nvi from "data/nvi";
import VersePart from "picker/VersePart";
import { isValidReference } from "picker/utils/data";
import { useNavigate } from "picker/utils/navigations";
import { VerseReference } from "types";

type Props = { onCancel: () => void; state: VerseReference; onSave: (referece: VerseReference) => void };

export default function MainScreen({ state, onCancel, onSave }: Props) {
  const navigate = useNavigate();
  const book = nvi.find(b => b.abbrev === state.book)?.name as string;

  const handleSave = () => onSave(state);

  const formatVerses = (verses: VerseReference["verses"]) => {
    if (!verses) return '';
    return verses.join(' ao ');
  }

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
          	disabled={!state.book}
            label="Capítulo"
            onChoose={() => navigate("chapter")}
            value={`${state.chapter ?? ''}`}
          />
          <VersePart
            disabled={!state.book || !state.chapter }
            label="Versículo"
            onChoose={() => navigate("verse")}
            value={formatVerses(state.verses)}
          />
        </Grid>
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button variant="link" onClick={onCancel}>
          Cancelar
        </Button>
        <Button colorScheme="purple" disabled={!isValidReference(state)} onClick={handleSave}>
          Decorar
        </Button>
      </DrawerFooter>
    </div>
  );
}
