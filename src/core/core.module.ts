import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { CoreController } from './core.controller';
// import { LoggerModule } from './logger/logger.module';

@Module({
    controllers: [CoreController],
    providers: [CoreService]
})
export class CoreModule {}
