var IS = require('inline-source');
var fs = require('filendir');
var path = require('path');
var src = 'src/index.html';
var build = 'build/index.html';

IS.inlineSource(src, {
    compress: true,
    attribute: false,
    svgAsImage: false,
    rootpath: path.dirname(src)
}).then(function (html) {
    fs.writeFileSync(build, html);
}).catch(function (err) {
    throw err;
});
