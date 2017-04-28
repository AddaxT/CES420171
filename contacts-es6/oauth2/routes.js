var { Router, Route } = require('../router');
var { AuthController } = require('./auth');
var { OAuthController } = require('./controller');

class OAuthRouter extends Router {
    constructor(app) {
        super(app);
    }

    get routes() {
        return {
            '/oauth2/authorize': [
                new Route("post", "createClient")
            ],
            '/oauth2/token': [
                new Route("get", "getClient")
            ]
        };
    }

    createClient(req, res, next) {
        clientController.createClient(req, res, next);
    }

    getClient(req, res, next) {
        clientController.getClientById(req, res, next);
    }
}

exports.ClientRouter = ClientRouter;