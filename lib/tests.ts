import { removeItem } from './removeItem';


let arr = ['he', 'llo', 'bay', 'bayyyy'];

// Test 1: Make sure 0 removes first item:
removeItem(0, arr);
if (arr[0] === 'llo') console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: Make sure -1 removes last item:
removeItem(-1, arr);
if (arr[arr.length - 1] === 'bay') console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3: Make sure 1 removes second item:
arr = ['he', 'llo', 'zz'];
removeItem(1, arr);
if (arr.length === 2 && arr[1] === 'zz') console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: Make sure -2 removes second to last item:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeItem(-2, arr);
if (arr.length === 5 && arr[3] === 'gg'  && arr[4] === 'aa') console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: Make sure -6 removes first item:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeItem(-6, arr);
if (arr.length === 5 && arr[0] === 'llo') console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: Make sure -7 triggers error:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
let errorTriggered = false;
try {
	removeItem(-7, arr);
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
	removeItem(6, arr);
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
	removeItem('1', arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 failed');


// Test 9: Make sure object in second argument triggers error:
errorTriggered = false;
try {
	removeItem(0, {});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 failed');
