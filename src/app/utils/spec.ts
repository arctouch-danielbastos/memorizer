import { HideSpec } from "./strategy";

export const toggleAt = (words: HideSpec[], index: number): HideSpec[] =>
  words.map((word, i) =>
    i !== index ? word : { ...word, isHidden: !word.isHidden }
  );

export const revealNext = (words: HideSpec[]): HideSpec[] => {
  const index = words.findIndex(word => word.isHidden);
  return toggleAt(words, index);
};

export const hidePrevious = (
  words: HideSpec[],
  canBeHidden: (word: string) => boolean
) => {
  const index = words.findLastIndex(
    word => canBeHidden(word.raw) && !word.isHidden
  );
  return toggleAt(words, index);
};

export const getPercentageDone = (
  words: HideSpec[],
  canBeHidden: (word: string) => boolean
) => {
  const hideable = words.filter(word => canBeHidden(word.raw));
  if (hideable.length === 0) return 100;
  const notHidden = hideable.filter(word => !word.isHidden);

  return Math.ceil((notHidden.length / hideable.length) * 100);
};
