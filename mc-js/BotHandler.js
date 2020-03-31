'use strict';
var fs = require('fs');

var Debug = true;

var client;
var bots = [];
var botFiles = fs.readdirSync('./Bots').filter(file => file.endsWith('.js'));
for (var file of botFiles) {
    if (Debug) {
        try {
            delete require.cache[require.resolve(`./Bots/${file}`)];
        } catch (e) {
            // pass
        }
    }
    var bot = require(`./Bots/${file}`);
    bots.push(bot);
}

function SetHandler(_client) {
    client = _client;
    bots.forEach(e => { if (typeof (e.init) == "function") e.init(client);});
}
module.exports = { bots, SetHandler }