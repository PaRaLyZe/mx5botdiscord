//
var http = require('http');

http.get({ host: 'testdrive.iracing.com', path: '/' }, (res) => {
  console.log("statusCode: ", res.statusCode);
  //console.log("headers: ", res.headers);

  var content = "";
  res.on('data', (d) => {
    content += d;
  });

  res.on('end', () => {
    console.log("content-length: ", content.length);
  });

}).on('error', (e) => {
  console.error(e);
});
