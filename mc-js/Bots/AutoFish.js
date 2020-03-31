'use strict';
var dataTypes = require("../DataTypes");
var client;
var playerID;
var playerLocation;
var fishingHookID;

function init(_client) {
    client = _client;

    client.on("spawn_entity", OnSpawnEntity);
}

function OnSpawnEntity(packet) {
    if (packet.type == 102) {
        if (dataTypes.Entity.CalculateDistance(new dataTypes.Location(packet.z, packet.y, packet.z), playerLocation) < 2) {
            fishingHookID = packet.entityid;
        }
    }
}
function OnLogin(packet) {
    playerID = packet.entityid;
}
function OnPosition(packet) {
    playerLocation = new dataTypes.Location(packet.z, packet.y, packet.z);
}

module.exports = {
    init: init
}