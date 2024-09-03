export type VerseReference = {
	verses: [] | [number, number] | [number] | null;
	chapter: number | null;
	bookId: string | null;
};
