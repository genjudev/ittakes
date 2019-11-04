#!/usr/bin/env node

const exec = require('child_process').exec;
const args = process.argv.slice(2).join(' ');

const startTime = new Date();

function execute(cmd, callback){
    exec(cmd, function(error, stdout, stderr){ callback(stdout); });
};

execute(args, data => {
    const endTime = new Date() - startTime;
    console.info('it takes: %dms\n\nOutput:\n%s', 
        endTime, 
        data.trim()
    );
});