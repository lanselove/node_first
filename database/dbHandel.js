var MongoClient = require('mongodb').MongoClient;
var connect = null;
var _getDbase = function(name) {
    return connect.db(name);
};

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function(err, link) {
    if (err) throw err;
    console.log('连接成功啦~_~');
    connect = link;
});

module.exports = {
    getDbase: function(name) {
        return _getDbase(name);
    }
};