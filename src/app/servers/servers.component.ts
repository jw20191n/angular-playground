import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <p>I am something in between</p>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server created.';
  serverName = "default server";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server created. Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  //one way binding update server name
  onUpdateServerName(event: any){
    console.log(event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
