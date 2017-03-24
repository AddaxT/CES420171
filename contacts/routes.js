module.exports = {
	configure: function (app) {
		app.get('/', function (req, res) {
			res.send(`Hello ${req.query.name} from query param`);
		});

		app.post('/', function (req, res) {
			var person = req.body;
			console.log(person);
			res.send(`Hello ${person.name} ${person.surname} from json body`);
		});

		app.put('/', function (req, res) {
			res.send('hello world put');
		});

		app.delete('/', function (req, res) {
			res.send('hello world delete');
		});

		app.get('/:name', function (req, res) {
			res.send(`Hello ${req.params.name} from route param`);
		});
	}
};