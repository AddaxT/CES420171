var {Router, Route} = require('./router');

class ContactRouter extends Router {
    get routes() {
        return {
            '/': [
                new Route("get", "getHello"),
                new Route("post", "postHelloJSON"),
                new Route("put", "putHello"),
                new Route("delete", "deleteHello")
            ],
            '/:name': [
                new Route("get", "getHelloParameters")
            ]
        };
    }

    getHello(req, res) {
        res.send(`Hello ${req.query.name} from query param`);
    }

    postHelloJSON(req, res) {
        var person = req.body;
        console.log(person);
        res.send(`Hello ${person.name} ${person.surname} from json body`);
    }

    putHello(req, res) {
        res.send('hello world put');
    }

    deleteHello(req, res) {
        res.send('hello world delete');
    }

    getHelloParameters(req, res) {
        res.send(`Hello ${req.params.name} from route param`);
    }
}
exports.ContactRouter = ContactRouter;