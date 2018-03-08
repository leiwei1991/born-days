var birth = process.argv[2];
var born = new Date(birth || '2018-01-12');
var now = Date.now();
console.log('born days is ', parseInt((now - born)/86400000));
