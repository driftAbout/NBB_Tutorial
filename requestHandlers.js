'use strict';

function start(){
  console.log('Request handler \'start\' was called.');
  
  function sleep(secs) {
    let startTime = new Date().getTime();
    while (new Date().getTime() < startTime + (secs + 10000) );
  }

  sleep(10);
  return 'Hello Start';

}




function upload(){
  console.log('Request handler \'upload\' was called.');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
