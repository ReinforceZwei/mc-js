'use strict';
var fs = require('fs');

var Debug = true;

var client;
var commands = {};
var commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for (var file of commandFiles) {
    if (Debug) {
        try {
            delete require.cache[require.resolve(`./Commands/${file}`)];
        } catch (e) {
            // pass
        }
    }
    var command = require(`./Commands/${file}`);
    commands[command.name] = command;
}

// Run command
function Run(name,args) {
    if (commands[name]) {
        commands[name].run(args, client);
        return true;
    } else {
        //console.log("Command not found. Type /help for available commands.");
        return false;
    }
}

// console command events
function OnCommand(command) {
    if (command.startsWith('/')) {
        var args = command.slice(1).split(/ +/);
        var commandName = args.shift().toLowerCase();
        if (!Run(commandName, args)) {
            // command not found, forward to server
            client.write("chat", { message: command });
        }
    } else {
        client.write("chat", { message: command });
    }
}

// Get client
function SetHandler(_client) {
    client = _client;
    client.commands = commands;
}

module.exports = { Run, OnCommand, SetHandler }