'use strict';

function route(handle, pathname) {
  console.log(`About to route a request for ${pathname}`);
  if (typeof handle[pathname] !== 'function') return console.log(`No request handler found for ${pathname}`);
  handle[pathname]();
}

exports.route = route;