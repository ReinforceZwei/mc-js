'use strict';

var fs = require("fs");
var mc = require("minecraft-protocol");
var EventHandler = require("./EventHandler");
var CommandHandler = require("./CommandHandler");

var config = require("./config");

var stdin = process.openStdin();
stdin.addListener("data", function (d) {
    CommandHandler.OnCommand(d.toString().trim());
});

var client = mc.createClient(config);

EventHandler.SetHandler(client);
CommandHandler.SetHandler(client);
