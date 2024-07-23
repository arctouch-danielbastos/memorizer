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


