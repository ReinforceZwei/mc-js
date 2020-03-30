'use strict';
/*
 * Handle connect, disconnect, chat, etc
 */
var chatParser = require("./Chat/Chat");
var color = require('ansi-color').set
var client;

module.exports = { SetHandler, OnCommand };

function SetHandler(_client) {
    client = _client;
    client.on("chat", OnChat);
    client.on("connect", OnConnect);
    client.on("disconnect", OnDisconnect);
    client.on("end", OnDisconnect);
    client.on('kick_disconnect', OnKick);
}

// console command events
function OnCommand(command) {
    if (command.startsWith('/')) {
        var args = command.slice(1).split(/ +/);
        var commandName = args.shift().toLowerCase();
        // TODO: Implement Command
        switch (commandName) {
            case 'quit':
                client.end();
                break;
            default:
                client.write("chat", { message: command });
        }
    } else {
        client.write("chat", { message: command });
    }
}

// packets events
function OnChat(packet) {
    console.log(chatParser(JSON.parse(packet.message), {}));
}
function OnConnect() {
    console.info('Successfully connected');
}
function OnDisconnect() {
    console.info('Client disconnected from server');
    process.exit(1);
}
function OnKick(packet) {
    console.info('Kicked for ' + packet.reason);
}