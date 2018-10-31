"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_items_1 = require("@writetome51/array-get-and-remove-items");
// index can be negative or positive.
function removeItems(indexes, array) {
    array_get_and_remove_items_1.getAndRemoveItems(indexes, array);
}
exports.removeItems = removeItems;
