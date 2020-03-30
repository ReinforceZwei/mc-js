'use strict';

var fs = require("fs");
var mc = require("minecraft-protocol");
var EventHandler = require("./EventHandler");

var config = require("./config");

var stdin = process.openStdin();
stdin.addListener("data", function (d) {
    EventHandler.OnCommand(d.toString().trim());
});

var client = mc.createClient(config);

EventHandler.SetHandler(client);

