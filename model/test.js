var nano = require('nano')('http://localhost:5984'),
    test = nano.db.use('myfirsttest');

exports.test = function (req, res) {
    // clean up the database we created previously
    nano.db.destroy('alice', function() {
        // create a new database
        nano.db.create('alice', function() {
            // specify the database we are going to use
            var alice = nano.use('alice');
            // and insert a document in it
            alice.insert({ crazy: true }, 'rabbit', function(err, body, header) {
                if (err) {
                    console.log('[alice.insert] ', err.message);
                    return;
                }
                console.log('you have inserted the rabbit.')
                console.log(body);
            });
        });
    });
};