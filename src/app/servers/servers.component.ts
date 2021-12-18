import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "test";
  userName = "";
  allowResetUser =  this.userName !== "";
  serverCreated = false;
  servers = ["Test1", "Test2"];
  showDetails = false;
  showDetailsCounter = 0;
  showDetailsLog = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.serverCreationStatus = "Server was created! name:" + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);

  }

  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUser()
  {
    this.userName = "";
  }

  onDetailsClick()
  {
    this.showDetails = !this.showDetails;
    this.showDetailsCounter++;
    this.showDetailsLog.push(this.showDetailsCounter);
  }
}
