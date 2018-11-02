"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_by_indexes_1 = require("@writetome51/array-get-and-remove-by-indexes");
// indexes can be negative or positive.
function removeByIndexes(indexes, array) {
    array_get_and_remove_by_indexes_1.getAndRemoveByIndexes(indexes, array);
}
exports.removeByIndexes = removeByIndexes;
