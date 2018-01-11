'use strict';

const exec = require('child_process').exec;

function start(res){
  console.log('Request handler \'start\' was called.');

  exec('ls -lah', (err, stdout, stderr) => {
    response_content.call(res, stdout);
  });

}

function upload(res){
  console.log('Request handler \'upload\' was called.');
  response_content.call(res, 'Hello Upload');
}

function response_content (content){
  this.writeHead(200, {'Content-Type': 'text/plain'});
  this.write(content);
  this.end();
}

exports.start = start;
exports.upload = upload;
