const path = require('path');

module.exports = {
    entry: './scripts/index',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}