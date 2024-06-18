import {
  Button,
  Center,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  SimpleGrid,
} from "@chakra-ui/react";
import { range } from "lodash";

function RangePicker() {
  return (
    <SimpleGrid bg="purple.50" py={6} px={3} borderRadius="md" columns={7}>
      {range(0, 33).map(num => (
        <Center w="48px" h="48px" key={num}>
          {num}
        </Center>
      ))}
    </SimpleGrid>
  );
}

export default function VerseScreen() {
  return (
    <div>
      <DrawerHeader pt={6}>Capítulo 14</DrawerHeader>
      <DrawerBody maxH={80}>
        <RangePicker />
      </DrawerBody>
      <DrawerFooter display="flex" gap={5} pb={6}>
        <Button variant="link">Cancelar</Button>
        <Button variant="outline" colorScheme="purple">
          Voltar
        </Button>
      </DrawerFooter>
    </div>
  );
}
