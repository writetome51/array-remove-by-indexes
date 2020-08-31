import { getAndRemoveByIndexes } from '@writetome51/array-get-and-remove-by-indexes';


// Negative indexes not allowed.

export function removeByIndexes(indexes: number[], array): void {
	getAndRemoveByIndexes(indexes, array);
}
