import type { defineStyleConfig } from "@chakra-ui/react";

function applyObj<
  Style extends ReturnType<typeof defineStyleConfig>,
  Variants extends keyof Style["variants"]
>(style: Style, cx: { [key in Variants]?: boolean }) {
  let sx = { ...style.baseStyle };
  if (!cx || !style.variants) return sx;

  for (const [key, shouldAdd] of Object.entries(cx)) {
    if (shouldAdd && key in style.variants) {
      sx = { ...sx, ...style.variants[key] };
    }
  }

  return sx;
}

export default function sx<
  Style extends ReturnType<typeof defineStyleConfig>,
  Variants extends keyof Style["variants"]
>(style: Style, ...cx: Array<{ [key in Variants]?: boolean } | Variants>) {
  let sx = { ...style.baseStyle };
  if (!cx || !style.variants) return sx;

  for (const value of cx) {
    sx = {
      ...sx,
      ...(typeof value === "object"
        ? applyObj(style, value)
        : style.variants[value]),
    };
  }

  return sx;
}
