/// <reference path="../typings/tsd.d.ts"/>
import {EventEmitter} from 'events';

export class Socket extends EventEmitter {
  private _handle;

  constructor(iface: string) {
    super();
  }
}
