import nvi from "data/nvi";
import nullthrows from "nullthrows";
import { VerseReference } from "types";

function getChapterList(state: VerseReference) {
	const { book } = state;
	const chapterList = nvi.find(it => it.abbrev === book)?.chapters;
	return nullthrows(chapterList);
}

export function getMaxVerseCount(state: VerseReference) {
	const chapter = nullthrows(state.chapter);
	const chapterList = getChapterList(state);
	return nullthrows(chapterList[chapter]).length;
}

export function getMaxChapterCount(state: VerseReference) {
	return getChapterList(state).length;
}

export function isValidReference(state: VerseReference) {
	if (!state.book) return false;
	if (typeof state.chapter !== 'number') return false;
	if (!Array.isArray(state.verses) || state.verses.length === 0) return false;
	return true;
}
