import { Controller } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Controller('consumer')
export class ConsumerController {
  @OnEvent('event')
  handleEvent() {
    console.log('event handled');
  }
}
