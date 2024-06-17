import type { defineStyleConfig } from "@chakra-ui/react";

export default function sx<T extends ReturnType<typeof defineStyleConfig>>(
  style: T,
  cx?: { [key in keyof T["variants"]]?: boolean }
) {
  let sx = { ...style.baseStyle };
  if (!cx || !style.variants) return sx;

  for (const [key, shouldAdd] of Object.entries(cx)) {
    if (shouldAdd && key in style.variants) {
      sx = { ...sx, ...style.variants[key] };
    }
  }

  return sx;
}
