var chalk = require("chalk");
var _ = require("lodash");

console.log(chalk.blue("Hello world!"));
var arr = ["a", "b", "c"];

_.each(arr, function(element, index, collection) {
    console.log("Value at index", chalk.green(index), "is", chalk.red(element));
});