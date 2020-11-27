import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducerModule } from './producer/producer.module';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
  imports: [EventEmitterModule.forRoot(), ProducerModule, ConsumerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
