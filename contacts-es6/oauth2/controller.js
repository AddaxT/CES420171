var oauth2orize = require('oauth2orize');
var User = require('./user/model');
var Client = require('./client/model');
var Token = require('./token/model');
var Code = require('./code/model');

var server = oauth2orize.createServer();

server.serializeClient((client, callback) => callback(null, client._id));

server.deserializeClient((id, callback) => {
    Client.findOne({ _id: id })
        .exec()
        .then((client) => callback(null, client))
        .catch(e => callback(e));
});

server.grant(oauth2orize.grant.code((client, redirectUri, user, ares, callback) => {
    var code = new Code({
        value: uid(16),
        clientId: client._id,
        redirectUri: redirectUri,
        userId: user._id
    });
    code.save()
        .then(savedCode => callback(null, savedCode.value))
        .catch(e => callback(e));
}));

server.exchange(oauth2orize.exchange.code((client, code, redirectUri, callback) => {
    Code.findOne({ value: code })
        .exec()
        .then((authCode) => {
            if (authCode === undefined) { return callback(null, false); }
            if (client._id.toString() !== authCode.clientId) { return callback(null, false); }
            if (redirectUri !== authCode.redirectUri) { return callback(null, false); }
            
            authCode.remove()
                .then(() => {
                    
                    var token = new Token({
                        value: uid(256),
                        clientId: authCode.clientId,
                        userId: authCode.userId
                    });
                    
                    token.save()
                        .then(savedToken => {
                            callback(null, savedToken);
                        }).catch(e => callback(e));
                }).catch(e => callback(e));
        }).catch(e => callback(e));
}));

exports.authorization = [
    server.authorization((clientId, redirectUri, callback) => {

        Client.findOne({ id: clientId })
            .exec()
            .then((client) => callback(null, client, redirectUri))
            .catch(e => callback(e));
    }),
    function (req, res) {
        res.render('dialog', { transactionID: req.oauth2.transactionID, user: req.user, client: req.oauth2.client });
    }
]

exports.decision = [
  server.decision()
]

exports.token = [
  server.token(),
  server.errorHandler()
]

function uid (len) {
  var buf = []
    , chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    , charlen = chars.length;

  for (var i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
  }

  return buf.join('');
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}