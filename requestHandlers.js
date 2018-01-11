'use strict';


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
    <form action="/upload" method="POST">
    <textarea name="text" cols="60" rows="20"></textarea>
    <input type="submit" value="Submit text">
    </form>
  </body>
  </html>`;

  response_content.call(res, ['text/html', body]);

}

function upload(res){
  console.log('Request handler \'upload\' was called.');
  response_content.call(res, ['text/plain', 'Hello Upload']);
}

function response_content (args){
  let [type, content] = args;
  this.writeHead(200, {'Content-Type': type});
  this.write(content);
  this.end();
}

exports.start = start;
exports.upload = upload;
