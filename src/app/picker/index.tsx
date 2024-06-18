import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import BookScreen from "picker/BookScreen";
import ChapterScreen from "picker/ChapterScreen";
import MainScreen from "picker/MainScreen";
import VerseScreen from "picker/VerseScreen";
import { useState } from "react";

type Screen = "main" | "book" | "verse" | "chapter";

type Props = { isOpen: boolean; onClose: () => void };
export default function VersePicker({ isOpen, onClose }: Props) {
  const [state] = useState({
    verses: [1, 10],
    chapter: 1,
    book: "Hebreus",
  });

  const [screen, setScreen] = useState<Screen>("main");

  return (
    <Drawer isOpen={isOpen} placement="bottom" size="xl" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        {screen === "main" && (
          <MainScreen
            onClickBook={() => setScreen("book")}
            onClickChaper={() => setScreen("chapter")}
            onClickVerse={() => setScreen("verse")}
          />
        )}
        {screen === "book" && <BookScreen />}
        {screen === "chapter" && <ChapterScreen />}
        {screen === "verse" && <VerseScreen />}
      </DrawerContent>
    </Drawer>
  );
}
