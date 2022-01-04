import { Component} from '@angular/core';
import { AccountsService } from '../services/accounts.services';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('Status' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
