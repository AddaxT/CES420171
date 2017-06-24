var amqp = require('amqplib');

class Receiver {

    constructor(host, queue) {
        this.host = host;
        this.queue = queue;
    }

    receiveMessage(messageHandler) {
        amqp.connect(this.host).then(function (connection) {
            return connection.createChannel().then(function (channel) {
                var ok = channel.assertQueue(this.queue, { durable: false });

                ok = ok.then(function (_qok) {
                    return channel.consume(this.queue, function (message) {
                        messageHandler(message);
                    }, { noAck: true });
                });
            }).finally(function () { connection.close(); });
        }).catch(console.warn);
    }
}