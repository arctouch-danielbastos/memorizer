import nvi from "data/nvi";
import { range } from "lodash";
import nullthrows from "nullthrows";
import { VerseReference } from "types";

function getChapterList(state: VerseReference) {
	const { book } = state;
	const chapterList = nvi.find(it => it.abbrev === book)?.chapters;
	return nullthrows(chapterList);
}

function getChapter(state: VerseReference){
	const chapter = nullthrows(state.chapter);
	const chapterList = getChapterList(state);
	return nullthrows(chapterList[chapter]);
}

export function getMaxVerseCount(state: VerseReference) {
	return getChapter(state).length;
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

function getVerseRange(state: VerseReference){
	const {verses} = state;
	if (!Array.isArray(verses)) return [];
	switch (verses.length){
		case 0: return [];
		case 1: return range(verses[0], verses[0] + 1);
		case 2: return range(verses[0], verses[1] + 1);
	}
}

export function getVerseText(state: VerseReference){
	const chapter = getChapter(state);
	const result: string[] = [];

	for (const verseNum of getVerseRange(state)) {
		result.push(chapter[verseNum]);
	}

	return result;
}
