const path = require('path');

let project = process.env.REACT_SRC
let appIndexJs = 'src/index.js'
let appSrc = 'src'

if (project !== 'sh') {
    appIndexJs = ['src', project, 'index.js'].join('/')
    appSrc = ['src', project].join('/')
}
console.log(appSrc)

module.exports = {
    paths: function (paths, env) {        
        paths.appIndexJs = path.resolve(__dirname, appIndexJs);
        paths.appSrc = path.resolve(__dirname, appSrc);
        return paths;
    },
}
