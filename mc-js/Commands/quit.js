'use strict';

var run = function run(args, client) {
    client.end();
}

var obj = {
    "name": "quit",
    "description": "Quit the app",
    "run": run
}

module.exports = obj;