import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hiddent Account',
          status: 'hidden'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService) {}

      addAccount(name: string, status: string ) {
        this.accounts.push({name, status});
        this.loggingService.logStatusChange(status);
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        }
}
