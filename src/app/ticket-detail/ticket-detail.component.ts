import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: Ticket;
  
  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicket(id)
      .subscribe( t => this.ticket = t);
  }

  goBack(): void {
    this.location.back();
  }
}
