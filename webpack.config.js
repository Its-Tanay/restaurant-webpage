const path = require('path');

module.exports = {
    entry: {index :'./src/index.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
}