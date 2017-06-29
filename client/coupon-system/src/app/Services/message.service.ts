import { Injectable } from '@angular/core';
import { Message } from "primeng/primeng";

@Injectable()
export class MessageService {

  constructor() { }

  createSuccessMessage(summary: string, detail: string): Message {
    return { severity: 'success', summary: summary, detail: detail }
  }

  createInfoMessage(summary: string, detail: string): Message {
    return { severity: 'info', summary: summary, detail: detail }
  }

  createWarnMessage(summary: string, detail: string): Message {
    return { severity: 'warn', summary: summary, detail: detail }
  }

  createErrorMessage(summary: string, detail: string): Message {
    return { severity: 'error', summary: summary, detail: detail }
  }

}
