import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [CoreModule, EventsModule],
})
export class AppModule {}
