import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { range } from "lodash";
import { useNavigate } from "picker/utils/navigations";

export default function ChapterScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <DrawerHeader pt={6}>Hebreus</DrawerHeader>
      <DrawerBody maxH={80}>
        <UnorderedList spacing={4} styleType="none">
          {range(1, 13).map(num => (
            <ListItem fontSize="larger" key={num}>
              Capítulo {num}
            </ListItem>
          ))}
        </UnorderedList>
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button variant="link">Cancelar</Button>
        <Button
          variant="outline"
          colorScheme="purple"
          onClick={() => navigate("book")}
        >
          Voltar
        </Button>
      </DrawerFooter>
    </div>
  );
}
