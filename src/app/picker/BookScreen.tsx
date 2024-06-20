import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useNavigate } from "picker/utils/navigations";
import { useState } from "react";

export default function BookScreen() {
  const navigate = useNavigate();
  const [books] = useState([
    "Mateus",
    "Marcos",
    "Lucas",
    "João",
    "Atos",
    "Romanos",
    "1 Coríntios",
    "2 Coríntios",
    "Gálatas",
    "Efésios",
  ]);

  return (
    <div>
      <DrawerHeader pt={6}>Escolher livro</DrawerHeader>
      <DrawerBody maxH={80}>
        <UnorderedList spacing={4} styleType="none">
          {books.map(name => (
            <ListItem fontSize="larger" key={name}>
              {name}
            </ListItem>
          ))}
        </UnorderedList>
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button variant="link">Cancelar</Button>
        <Button
          variant="outline"
          colorScheme="purple"
          onClick={() => navigate("main")}
        >
          Voltar
        </Button>
      </DrawerFooter>
    </div>
  );
}
