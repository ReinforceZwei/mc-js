'use strict';
/*
 * Handle connect, disconnect, chat, etc
 */
var chatParser = require("./Chat/Chat");
var color = require('ansi-color').set
var client;

module.exports = { SetHandler };

function SetHandler(_client) {
    client = _client;
    client.on("chat", OnChat);
    client.on("connect", OnConnect);
    client.on("disconnect", OnDisconnect);
    client.on("end", OnDisconnect);
    client.on('kick_disconnect', OnKick);
    client.on('error', OnError);
}



// packets events
function OnError(err) {
    console.error(err);
}
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