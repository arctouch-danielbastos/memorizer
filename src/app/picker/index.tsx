import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import BookScreen from "picker/BookScreen";
import ChapterScreen from "picker/ChapterScreen";
import MainScreen from "picker/MainScreen";
import VerseScreen from "picker/VerseScreen";
import {
  useCurrentScreen,
  withNavigation,
} from "picker/utils/navigations";
import { useEffect, useState } from "react";
import { VerseReference } from "types";

type Props = { isOpen: boolean; onClose: () => void };
function VersePicker({ isOpen, onClose }: Props) {
  const [state, setState] = useState<VerseReference>({
    verses: [1, 10],
    chapter: 1,
    book: "hb" as string | null,
  });

  useEffect(() => {
    console.log('=== state', JSON.stringify(state));
  }, [state]);

  const onChange = (change: Partial<VerseReference>) => {
    setState(state => ({ ...state, ...change }));
  };

  const screen = useCurrentScreen();

  return (
    <Drawer isOpen={isOpen} placement="bottom" size="xl" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        {screen === "main" && (
          <MainScreen state={state} onCancel={onClose} onSave={onClose} />
        )}
        {screen === "book" && (
          <BookScreen
            state={state}
            onChoose={book => onChange({ book, chapter: null, verses: null })}
          />
        )}
        {screen === "chapter" && (
          <ChapterScreen state={state} onChoose={chapter => onChange({ chapter, verses: null })} />
        )}
        {screen === "verse" && <VerseScreen state={state} onChoose={verses => onChange({ verses })} />}
      </DrawerContent>
    </Drawer>
  );
}

export default withNavigation(VersePicker);
