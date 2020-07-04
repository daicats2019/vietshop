const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Username: String,
    Password: String,
    StaffID: String
} , { collection: 'Accounts' } );

var Account = mongoose.model('Accounts', accountSchema);

module.exports = Account;