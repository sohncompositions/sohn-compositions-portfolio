require('dotenv').config();
const path = require('path');

module.exports.sources = {
    CLIENT_PATH: path.resolve(__dirname, 'client', 'dist', 'sohn-compositions-portfolio'),
    CLIENT_HTML: path.resolve(__dirname, 'client', 'dist', 'sohn-compositions-portfolio', 'index.html'),
}