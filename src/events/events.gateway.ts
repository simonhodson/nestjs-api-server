import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Server } from 'socket.io';

  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class EventsGateway {
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('events')
    findAll(@MessageBody() data: any): Observable<WsResponse<string>> {
      console.log('RUNNING  >> ', data)
      return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: `ITEM > ${item}` })));
    }
  
    @SubscribeMessage('identity')
    async identity(@MessageBody() data: string): Promise<string> {
      return data;
    }
  } 