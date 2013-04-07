var mongo        = require('mongoskin'),
    url          = 'localhost',
    port         = 27017,
    params       = '?auto_reconnect=true',
    databaseName = 'books',
    connection   = typeof MONGOLAB_URI !== 'undefined' ? MONGOLAB_URI : url + ':' + port + '/' + databaseName + params,
    database     = mongo.db(connection,
                            { safe: true }),
    booksDb      = database.collection('books');

exports.database = database;
exports.collections = { books: booksDb };