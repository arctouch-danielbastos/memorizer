import { flatten } from "lodash";

export type HideSpec = {
  raw: string;
  isHidden: boolean;
  hiddenForm: Array<{ show: boolean; letters: string }>;
};

export type Strategy = {
  obfuscate: (verses: string[]) => HideSpec[];
  canBeHidden: (word: string) => boolean;
};

type Options = { lettersToShow: number };
export default function showWordStart({ lettersToShow }: Options): Strategy {
  return {
    canBeHidden: word => word.length > lettersToShow + 1,
    obfuscate(verses) {
      const specs = verses.map(verse =>
        verse.split(/\s+/).map(word => ({
          raw: word,
          isHidden: this.canBeHidden(word),
          hiddenForm: [
            { show: true, letters: word.slice(0, lettersToShow) },
            { show: false, letters: word.substring(lettersToShow) },
          ],
        }))
      );

      return flatten(specs);
    },
  };
}
