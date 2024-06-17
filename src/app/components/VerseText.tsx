import type { HideSpec } from "utils/strategy";
import { Box, Text, defineStyleConfig } from "@chakra-ui/react";
import sx from "utils/sx";

type Part = HideSpec["hiddenForm"][0];

// #region Style
const wordStyle = defineStyleConfig({
  variants: {
    hidden: {
      color: "transparent",
      borderBottom: "1px solid",
      borderBottomColor: "gray.900",
    },
  },
});

const wrapperStyle = defineStyleConfig({
  baseStyle: {
    display: "flex",
    fontSize: "lg",
    flexWrap: "wrap",
    p: 5,
    gap: 1,
  },
});
// #endregion

type SegmentProp = { part: Part; isHidden: boolean };
function Segment({ part, isHidden }: SegmentProp) {
  const style = sx(wordStyle, { hidden: isHidden && !part.show });

  return (
    <Box as="span" sx={style}>
      {part.letters}
    </Box>
  );
}

type WordProp = { spec: HideSpec; isPeeking: boolean };
function Word({ spec, isPeeking }: WordProp) {
  return (
    <span>
      {spec.hiddenForm.map(part => (
        <Segment
          key={part.letters}
          part={part}
          isHidden={!isPeeking && spec.isHidden}
        />
      ))}
    </span>
  );
}

type Props = { words: HideSpec[]; isPeeking: boolean };

export default function VerseText({ isPeeking, words }: Props) {
  return (
    <Text sx={sx(wrapperStyle)} as="article">
      {words.map(i => (
        <Word key={i.raw} isPeeking={isPeeking} spec={i} />
      ))}
    </Text>
  );
}
