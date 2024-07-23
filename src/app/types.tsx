export type VerseReference = {
	verses: [] | [number, number] | [number] | null;
	chapter: number | null;
	book: string | null;
};
