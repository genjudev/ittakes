#!/usr/bin/env node
const help = require("./help");
const exec = require("child_process").exec;

const argsAsObject = (args) => {
    let options = [];
    let cmd = "";

    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith("-c")) {
            cmd = args.slice(i + 1).join(" ");
            break;
        } else {
            options.push(args[i]);
        }
    }

    return {
        getOptions: () => {
            return options;
        },
        getCmd: () => {
            return cmd;
        }
    }
};

const execute = (cmd, callback) => {
    exec(cmd, function (error, stdout, stderr) { callback(stdout, stderr); });
};

const args = argsAsObject(process.argv.slice(2));
const startTime = new Date();

// print HELP and exit
if (args.getOptions().indexOf("-h") > -1 || args.getCmd() === "") {
    help();
    process.exit(0);
}

execute(args.getCmd(), (out, err) => {
    const endTime = new Date() - startTime;

    if (err) console.info(err);

    console.info(
        "%s\n\nit takes: %s",
        out.trim(),
        args.getOptions().indexOf("-s") > -1 ? `${(endTime / 1000)}s` : `${endTime}ms`,
    );
});