import { removeByIndexes } from './removeByIndexes';
import { arraysMatch } from '@writetome51/arrays-match';


let arr = ['he', 'llo', 'bay', 'bayyyy'];

// Test 1: Make sure 0 removes first item:
removeByIndexes([0], arr);
if (arr[0] === 'llo') console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: Make sure -1 removes last item:
removeByIndexes([-1], arr);
if (arr[arr.length - 1] === 'bay') console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3: Make sure 0 and 2 removes first and third items:
arr = ['he', 'llo', 'zz'];
removeByIndexes([0, 2], arr);
if (arr.length === 1 && arr[0] === 'llo') console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: Make sure -2 removes second to last item and 1 removes second item:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeByIndexes([-2, 1], arr);
if (arraysMatch(arr, ['he', 'zz', 'gg', 'aa'])) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: Make sure -6 removes first item and 5 removes last item:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeByIndexes([-6, 5], arr);
if (arraysMatch(arr, [ 'llo', 'zz', 'gg', 'cc'])) console.log('test 5 passed');
else console.log('test 5 failed');



// Test 5A: Make sure -6 removes first item and -1 removes last item:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeByIndexes([-6, -1], arr);
if (arraysMatch(arr, [ 'llo', 'zz', 'gg', 'cc'])) console.log('test 5A passed');
else console.log('test 5A failed');


// Test 6: Make sure -7 triggers error:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
let errorTriggered = false;
try {
	removeByIndexes([-7], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7: Make sure 6 triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
	removeByIndexes([6], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 failed');


// Test 8: Make sure string '1' triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
	removeByIndexes(['1'], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 failed');


// Test 9: Make sure object in second argument triggers error:
errorTriggered = false;
try {
	removeByIndexes([0], {});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 failed');
