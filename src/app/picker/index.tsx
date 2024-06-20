import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import BookScreen from "picker/BookScreen";
import ChapterScreen from "picker/ChapterScreen";
import MainScreen from "picker/MainScreen";
import VerseScreen from "picker/VerseScreen";
import { useCurrentScreen, withNavigation } from "picker/utils/navigations";
import { useState } from "react";
import createContextHooks from "utils/createContextHooks";

type Screen = "main" | "book" | "verse" | "chapter";

type Props = { isOpen: boolean; onClose: () => void };
function VersePicker({ isOpen, onClose }: Props) {
  const [state] = useState({
    verses: [1, 10],
    chapter: 1,
    book: "Hebreus",
  });

  const screen = useCurrentScreen();

  return (
    <Drawer isOpen={isOpen} placement="bottom" size="xl" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        {screen === "main" && (
          <MainScreen onCancel={onClose} onSave={onClose} />
        )}
        {screen === "book" && <BookScreen />}
        {screen === "chapter" && <ChapterScreen />}
        {screen === "verse" && <VerseScreen />}
      </DrawerContent>
    </Drawer>
  );
}

export default withNavigation(VersePicker);
