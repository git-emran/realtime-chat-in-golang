import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: WebSocket;
  private listener: EventEmitter<any> = new EventEmitter();
}
