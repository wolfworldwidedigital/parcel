import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { generateKafkaClientOptions } from "./kafka/generateKafkaClientOptions";
import { MicroserviceOptions } from "@nestjs/microservices";
import { generateRabbitMQClientOptions } from "./rabbitmq/generateRabbitMQClientOptions";
import { RabbitMQ } from "./rabbitmq/rabbitmq.transport";

export async function connectMicroservices(app: INestApplication) {
  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>(generateKafkaClientOptions(configService));
}
