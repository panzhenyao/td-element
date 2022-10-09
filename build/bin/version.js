var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
// 版本切换hark
var content = {};
if (!content[version]) content[version] = '0.1';
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
