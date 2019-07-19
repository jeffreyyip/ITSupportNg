import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
    //this.tickets.forEach( t => console.log(`ticket: ${t.id}, ${t.appName}`) );
  }

  getTickets(): void {

    this.ticketService.getTickets()
    .subscribe(tickets => this.tickets = tickets);
    /*
    this.tickets= [
      {id: 0, appName: 'App01', description: 'system down', status: 'started'}
    ]
    */

  }
}
