import { getAndRemoveItems } from '@writetome51/array-get-and-remove-items';


// index can be negative or positive.

export function removeItems(indexes: number[], array): void {
	getAndRemoveItems(indexes, array);
}
