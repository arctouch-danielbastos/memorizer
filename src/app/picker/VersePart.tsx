import { Box, Input, Text, defineStyleConfig } from "@chakra-ui/react";
import sx from "utils/sx";

const Wrapper = defineStyleConfig({
  variants: {
    full: { gridColumn: "1 / span 2" },
  },
});

type Props = {
  disabled?: boolean;
  full?: boolean;
  label: string;
  onChoose?: () => void;
  value: string;
};

export default function VersePart({
  disabled = false,
  full = false,
  onChoose,
  label,
  value,
}: Props) {
  return (
    <Box as="label" sx={sx(Wrapper, { full })}>
      <Text size="md">{label}</Text>
      <Input
        colorScheme="purple"
        disabled={disabled}
        onClick={onChoose}
        variant="filled"
        size="lg"
        isReadOnly
        value={value}
      />
    </Box>
  );
}
