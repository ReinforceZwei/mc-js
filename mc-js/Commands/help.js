'use strict';

var run = function run(args, client) {
    if (args.length) {
        var commandName = args[0];
        if (client.commands[commandName]) {
            console.log(commandName + ": " + client.commands[commandName].description);
            if (client.commands[commandName].usage) {
                console.log("Usage: /" + commandName + " " + client.commands[commandName].usage);
            }
        }
    } else {
        var list = [];
        for (var name in client.commands) {
            list.push(name);
        }
        console.log("Available commands: ", list.join(', '));
        console.log("Use /help <command> for command usage");
    }
}

var obj = {
    "name": "help",
    "description": "Get available commands",
    "usage": "<?command>",
    "run": run
}

module.exports = obj;