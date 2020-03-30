'use strict';

var fs = require("fs");
//var readline = require('readline');
var mc = require("minecraft-protocol");
var EventHandler = require("./EventHandler");
var CommandHandler = require("./CommandHandler");

var config = require("./config");

// CLI method 1 - Using stdin
var stdin = process.openStdin();
stdin.addListener("data", function (d) {
    CommandHandler.OnCommand(d.toString().trim());
});
/* CLI method 2 - Using readline
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('> ');
rl.prompt();
rl.on('line', function (d) {
    console.log("Input: " + d);
    rl.setPrompt('> ');
    rl.prompt();
    //CommandHandler.OnCommand(d.toString().trim());
});
*/

var client = mc.createClient(config);

EventHandler.SetHandler(client);
CommandHandler.SetHandler(client);
