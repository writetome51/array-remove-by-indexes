# removeByIndexes(indexes, array): void

Removes items, identified by `indexes`, from `array`.   
`indexes` can be negative or positive.

## Examples
```js
let arr = [1,2,3,4,5,6,7];

removeByIndexes([-1, 0, 1], arr);
// arr is now [3,4,5,6]

arr = [10,20,30,40,50,60,70];

removeByIndexes([2, 4, 6], arr);
// arr is now [10,20,40,60]
```

## Installation
`npm i  @writetome51/array-remove-by-indexes`

## Loading
```js
import {removeByIndexes} from '@writetome51/array-remove-by-indexes';
```
