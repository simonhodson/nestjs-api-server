import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  public async getHello(): Promise<string> {
    return Promise.resolve('Hello My Old Friend');
  }
}
