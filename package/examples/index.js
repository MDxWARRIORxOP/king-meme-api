const memes = require("memes-api");

console.time("test");
memes.getMeme({ sfw: true }).then(console.log);
console.timeEnd("test");
