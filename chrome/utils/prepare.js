var fileSystem = require("fs-extra"),
    path = require("path");
var copydir = require('copy-dir');

// clean de dist folder
fileSystem.emptyDirSync(path.join(__dirname, "../build"));

fileSystem.emptyDirSync(path.join(__dirname, "../build/icons"));
copydir.sync(path.join(__dirname, "../src/icons"), path.join(__dirname, "../build/icons"));

require("./generate_manifest");
