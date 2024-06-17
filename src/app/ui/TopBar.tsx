import { Box, Flex, Heading, Spacer, defineStyle } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { ReactNode } from "react";
import styles from "ui/TopBar.module.scss";

const theme = defineStyle(props => ({
  w: "full",
  h: "3xs",
  background: mode("purple.50", "purple.800")(props),
}));

type Props = { title: string; right: ReactNode };
export default function TopBar({ right, title }: Props) {
  return (
    <Flex align="flex-end" px={8} pb={10} w="full" h="3xs" bg="purple.50">
      <Heading fontSize="3xl">{title}</Heading>
      <Spacer />
      <div>{right}</div>
    </Flex>
  );
}
