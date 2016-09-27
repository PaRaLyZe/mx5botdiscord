//var https = require('https');
var http = require('http');

http.get({ host: 'testdrive.iracing.com', path: '/' }, (res) => {
//https.get({ host: 'encrypted.google.com', path: '/' }, (res) => {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
    console.log(`Received ${d.length} bytes of data.`);
  });

}).on('error', (e) => {
  console.error(e);
});
