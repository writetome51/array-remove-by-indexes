import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { getArrayCopy } from '@writetome51/get-array-copy';
import { orderNumerically } from '@writetome51/order-numerically';


// Negative indexes not allowed.

export function removeByIndexes(
	indexes: number[], 
	array, 
	useRemovedItem = (item) => void 0
): void {
	indexes = getArrayCopy(indexes);

	__removeByIndexes(indexes, array);


	function __removeByIndexes(indexes, array) {
		orderNumerically(indexes);

		// algorithm only works if they're removed in descending order:
		for (let  i = indexes.length - 1;  i > -1;  --i) removeItem(indexes[i]);


		function removeItem(index) {
			if (index < 0) throw new Error('Negative indexes are not allowed in this function');
			let item = getAndRemoveByIndex(index, array);

			useRemovedItem(item);
		}
	}

}
