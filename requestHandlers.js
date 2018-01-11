'use strict';

const exec = require('child_process').exec;

function start(){
  console.log('Request handler \'start\' was called.');
  let content = 'empty';

  exec('ls -lah', (err, stdout, stderr) =>{
    content = stdout;
  });
  
  return content;

}

function upload(){
  console.log('Request handler \'upload\' was called.');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
