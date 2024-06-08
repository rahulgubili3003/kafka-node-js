import {Kafka} from 'kafkajs'

const kafka = new Kafka({
    clientId: "kafka-node-js",
    brokers: ["localhost:9092"],
});

export default kafka;