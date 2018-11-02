import { getAndRemoveItems } from '@writetome51/array-get-and-remove-by-indexes';


// indexes can be negative or positive.

export function removeByIndexes(indexes: number[], array): void {
	getAndRemoveByIndexes(indexes, array);
}
