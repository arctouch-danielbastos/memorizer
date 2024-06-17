import Icon from "ui/Icon";
import {
  Button,
  defineStyle,
  defineStyleConfig,
  extendBaseTheme,
} from "@chakra-ui/react";
import type { MaterialIcon } from "@material-design-icons/font";
import type { MouseEventHandler } from "react";

type Props = {
  icon: MaterialIcon;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function FAB({ icon, onClick }: Props) {
  return (
    <Button size="xl" colorScheme="purple" onClick={onClick}>
      <Icon name={icon} />
    </Button>
  );
}
