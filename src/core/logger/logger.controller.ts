// import { Controller, Post, Body, Get, ValidationPipe, UsePipes } from '@nestjs/common';
// import { ExternalLoggerDto } from './dto/external-logging.dto';

// @Controller('logger')
// export class LoggerController {

//     @Get('/health')
//     public async externalLoggerHealthCheck(): Promise<string> {
//         return "Status OK";
//     }

//     @Post()
//     @UsePipes(new ValidationPipe({ transform: true }))
//     public async externalLogger(@Body() extLog: ExternalLoggerDto): Promise<string> {
//         return extLog.data;
//     }
// }
