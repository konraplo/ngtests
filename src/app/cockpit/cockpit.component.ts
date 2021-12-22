import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverElements = [];
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //serverName= "";
  serverContent= "";
  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer(nameInput: HTMLInputElement)
  {
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent
    });
  }

  onCreateBlueprint(nameInput: HTMLInputElement)
  {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent
    });

  }

}
