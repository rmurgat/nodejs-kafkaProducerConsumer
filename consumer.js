const kafka = require("kafka-node");

const client = new kafka.KafkaClient({kafkaHost: "localhost:9092"});
const consumer = new kafka.Consumer( client, [{ topic: "rubenpipe", partition: 0 }] );

consumer.on("message", async function(message) {  console.log(message)});
