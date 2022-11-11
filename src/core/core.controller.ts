import { Controller, Get, Render } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller()
export class CoreController {
    constructor(private readonly coreService: CoreService) {}

    @Get()
    @Render('index')
    root() {
        return {
            message: 'Loqueue-Demo-API',
            link: 'app.lqtest://home'
        };
    }

    @Get('/hello')
    async getHello(): Promise<string> {
        return await this.coreService.getHello();
    }
}
