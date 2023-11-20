const path = require("path");
const fs = require("fs");
const chirps = ["bird reynolds", "boobies", "satantic goatsucker", "great tit", "bananaquit"] //[5 thjngs] //fetch from here from other file
fs.writeFileSync("chirps.json", JSON.stringify(chirps))


