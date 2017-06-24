var amqp = require('amqplib');

class Sender {

    constructor(host, queue) {
        this.host = host;
        this.queue = queue;
    }

    sendMessage(message) {
        amqp.connect(this.host).then(function (connection) {
            return connection.createChannel().then(function (channel) {
                var ok = channel.assertQueue(this.queue, { durable: false });

                return ok.then(function (_qok) {
                    channel.sendToQueue(this.queue, Buffer.from(message));
                    console.log(`Mensaje enviado con exito ${message}`);
                    return channel.close();
                });
            }).finally(function () { connection.close(); });
        }).catch(console.warn);
    }
}