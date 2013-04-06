var mongo        = require('mongoskin'),
    url          = 'localhost',
    port         = 27017,
    params       = '?auto_reconnect=true',
    databaseName = 'books',
    database     = mongo.db(url + ':' + port + params,
                            { database: databaseName, safe: true }),
    booksDb      = database.collection('events');

exports.database = database;
exports.collections = { books: booksDb };