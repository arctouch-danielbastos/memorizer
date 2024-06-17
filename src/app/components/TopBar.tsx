import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import Icon from "ui/Icon";

type Props = { title: string };
export default function TopBar({ title }: Props) {
  return (
    <Flex align="flex-end" px={8} pb={10} w="full" h="3xs" bg="purple.50">
      <Heading fontSize="3xl">{title}</Heading>
      <Spacer />
      <IconButton isRound={true} aria-label="" icon={<Icon name="book" />} />
    </Flex>
  );
}
