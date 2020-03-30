'use strict';

var fs = require("fs");

var mc = require("minecraft-protocol");

var chatParser = require("./Chat/Chat");

var config = require("./config");

var client = mc.createClient(config);

client.on('connect', function () {
    console.info('Successfully connected to ' + host + ':' + port);
});