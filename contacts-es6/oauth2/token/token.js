var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TokenSchema = new Schema({
    value: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    }
});

const TokenModel = mongoose.model('Token', TokenSchema);
module.exports = TokenModel;