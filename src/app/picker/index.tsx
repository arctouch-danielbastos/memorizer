import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import BookScreen from "picker/BookScreen";
import ChapterScreen from "picker/ChapterScreen";
import MainScreen from "picker/MainScreen";
import VerseScreen from "picker/VerseScreen";
import {
  useCurrentScreen,
  useNavigateForward,
  withNavigation,
  type Screen,
} from "picker/utils/navigations";
import { useState } from "react";
import { State } from "types";

type Props = { isOpen: boolean; onClose: () => void };
function VersePicker({ isOpen, onClose }: Props) {
  const [state, setState] = useState<State>({
    verses: [1, 10],
    chapter: 1,
    book: "hb" as string | null,
  });

  const onChange = (change: Partial<State>) => {
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
            bookId={state.book}
            onChoose={book => onChange({ book })}
          />
        )}
        {screen === "chapter" && <ChapterScreen />}
        {screen === "verse" && <VerseScreen />}
      </DrawerContent>
    </Drawer>
  );
}

export default withNavigation(VersePicker);
