import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate, CanDeactivateGuard } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;


  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {

   }
  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved ){
      return confirm('do you want to discard the changes?')
    }
    else{
      return true;
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.allowEdit = params.allowEdit === '1'? true: false;
      }
    )
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../', {relativeTo: this.route}]);
  }

}
