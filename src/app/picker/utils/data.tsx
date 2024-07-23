import nvi from "data/nvi";
import nullthrows from "nullthrows";
import { State } from "types";

function getChapterList(state: State) {
	const { book } = state;
	const chapterList = nvi.find(it => it.abbrev === book)?.chapters;
	return nullthrows(chapterList);
}

export function getMaxVerseCount(state: State) {
	const chapter = nullthrows(state.chapter);
	const chapterList = getChapterList(state);
	return nullthrows(chapterList[chapter]).length;
}

export function getMaxChapterCount(state: State) {
	return getChapterList(state).length;
}

export function isValidReference(state: State) {
	if (!state.book) return false;
	if (typeof state.chapter !== 'number') return false;
	if (!Array.isArray(state.verses) || state.verses.length === 0) return false;
	return true;
}
