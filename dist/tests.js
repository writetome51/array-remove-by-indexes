import { removeByIndexes } from './index.js';
import { arraysMatch } from '@writetome51/arrays-match';

let arr = ['he', 'llo', 'bay', 'bayyyy'];


// Test 1: Make sure 0 removes first item:
removeByIndexes([0], arr);
if (arr[0] === 'llo') console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: Make sure 2 removes last item:
removeByIndexes([2], arr);
if (arr[arr.length - 1] === 'bay') console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: Make sure 0 and 2 removes first and third items:
arr = ['he', 'llo', 'zz'];
removeByIndexes([0, 2], arr);
if (arr.length === 1 && arr[0] === 'llo') console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: Make sure 4 removes second to last item and 1 removes second item:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeByIndexes([4, 1], arr);
if (arraysMatch(arr, ['he', 'zz', 'gg', 'aa'])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: remove four items:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeByIndexes([0, 5, 3, 1], arr);
if (arraysMatch(arr, ['zz', 'cc'])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: Make sure index 6 triggers error, since arr only has 6 items:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
let errorTriggered = false;
try {
    removeByIndexes([6], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 8: Make sure string '1' triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg'];
try {
    removeByIndexes(['1'], arr);
}
catch (e) {
    errorTriggered = true; // 'the array does not have enough items to fulfill your request'
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9: Make sure object in second argument triggers error:
errorTriggered = false;
try {
    removeByIndexes([0], {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');
