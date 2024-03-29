# removeByIndexes\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;indexes: number[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useRemovedItem?: (item: T) => void<br>): void

Removes items, identified by `indexes`, from `array`.   
Negative indexes not allowed.  
Optional callback `useRemovedItem()` lets you collect each removed item  
for further manipulation.  
The algorithm first sorts `indexes` in ascending order. Then the items of  
`array` are removed in descending index order, i.e., item with index 0 would  
be removed last.

## Examples
```js
let arr = [10,20,30,40,50,60];
removeByIndexes([3, 1], arr);
// arr is now [10, 30, 50, 60].


arr = ['he', 'llo', 'zz', 'gg', 'cc'];
let removed = [];

removeByIndexes([4, 0], arr, (item) => removed.push(item));
// removed is ['cc', 'he'] (remember, elements are removed in descending index order).
// arr is ['llo', 'zz', 'gg']. 


arr = [10,20,30,40,50,60];
removed = [];

removeByIndexes([1, 3, 5], arr, (item) => removed.push(item));
// removed is [60, 40, 20]
// arr is [10, 30, 50].


// It can work with duplicate indexes, though the result may not be
// what you wanted:

arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeByIndexes([2, 3, 4, 4], arr);
// arr is ['he', 'llo']

arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeByIndexes([1, 1, 1], arr);
// arr is ['he', 'cc', 'aa']

// Don't pass string numbers. You'll get confusing errors or unexpected results.
removeByIndexes(['1'], arr);
// Error: "the array does not have enough items to fulfill your request"
```

## Installation
`npm i  @writetome51/array-remove-by-indexes`

## Loading
```js
import {removeByIndexes} from '@writetome51/array-remove-by-indexes';
```
