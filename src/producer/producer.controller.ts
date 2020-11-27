import { Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('producer')
export class ProducerController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Post()
  emit() {
    this.eventEmitter.emit('event');
  }
}
