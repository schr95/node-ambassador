import { EachMessagePayload, Kafka } from "kafkajs";
const kafka = new Kafka({ 
clientId: 'email-consumer',
brokers: ['pkc-12576z.us-west2.gcp.confluent.cloud:9092'],
ssl:true,
sasl:{
    mechanism:'plain',
    username:'J2T7OBYZECKULSL3',
    password:'nLgDkgLhKpTyacQePlf9MJUXDRmJDoorjUIkHOYiDcNdnmmI4kRkNnLYsLOSAd/V'
}
});

export=kafka.producer();