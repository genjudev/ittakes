#!/usr/bin/env node

const exec = require('child_process').exec;
const args = process.argv.slice(2).join(' ');

const startTime = new Date();

function execute(cmd, callback){
    exec(cmd, function(error, stdout, stderr){ callback(stdout, stderr); });
};

execute(args, (out, err) => {
    const endTime = new Date() - startTime;
    if (err) console.info(err);
    console.info("%s\n\nit takes: %dms", out.trim(), endTime);
});