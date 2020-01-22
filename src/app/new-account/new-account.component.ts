import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account-service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
   constructor(private logginService: LoggingService,
               private accountService: AccountService) {
                 this.accountService.statusUpdated.subscribe(
                   (status: string) => alert('New Status: ' + status)
                 );
               }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
   // this.logginService.logStatusChange(accountStatus);
  }

}
