'use strict';

const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

function start(res){
  console.log('Request handler \'start\' was called.');
  
  const body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html">
    <title>Uploader of Stuffs</title>
  </head>
  <body>
    <form action="/upload" enctype="multipart/form-data" method="POST">
    <input type="file" name="upload" >
    <input type="submit" value="Upload File">
    </form>
  </body>
  </html>`;

  response_content.call(res, ['text/html', body]);

}

function upload(res, req){
  console.log('Request handler \'upload\' was called.');
  let form = new formidable.IncomingForm();
  console.log('About to parse.');
  form.parse(req, (err, fields, files) => {
    console.log('Parse complete.');
    fs.rename(files.upload.path, '/tmp/test.png', err => {
      if (err){
        fs.unlink('/tmp/test.png');
        fs.rename(files.upload.path, '/tmp/text.png');
      }
    });
  });

  response_content.call(res, ['text/html', '<p>received image</p><img src="show">']);
}

function show(res){
  console.log('Requst handler \'show\' was called.');
  res.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('/tmp/test.png').pipe(res);
}

function response_content (args){
  let [type, content] = args;
  this.writeHead(200, {'Content-Type': type});
  this.write(content);
  this.end();
}

exports.start = start;
exports.upload = upload;
exports.show = show;
