To include in your project:

import {removeByIndexes} from '@writetome51/array-remove-by-indexes';

removeByIndexes(indexes: number[], array): void

Removes items from array, identified by indexes.  Indexes can be negative or positive.

Examples:

let arr = [1,2,3,4,5,6,7];

removeByIndexes([-1, 0, 1], arr);

arr is now [3,4,5,6]


let arr = [4,5,6,7,8,9,10];

removeByIndexes([2, 4, 6], arr);

arr is now [4,5,7,9]