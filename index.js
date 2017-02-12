var chalk = require("chalk");
var _ = require("lodash");
var logger = require("./lib/logger.js");
var messages = require("./data/messages.json");

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

_.each(messages, function(element, index, collection) {
    logMessage(element["message"], element["level"]);
});