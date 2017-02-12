var chalk = require("chalk");
var _ = require("lodash");
var logger = require("./lib/logger.js");

/* Demonstration Purposes
console.log(chalk.blue("Hello world!"));
var arr = ["a", "b", "c"];

_.each(arr, function(element, index, collection) {
    console.log("Value at index", chalk.green(index), "is", chalk.red(element));
});
*/

const LEVELS = {
    "INFO" : chalk.blue,
    "WARNING" : chalk.yellow,
    "ERROR" : chalk.red,
};

function logMessage(message, level) {
    logger.log(LEVELS[level](message));
}

logMessage("INFO", "INFO");
logMessage("WARNING", "WARNING");
logMessage("ERROR", "ERROR");