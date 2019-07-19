import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder }  from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-new',
  templateUrl: './ticket-new.component.html',
  styleUrls: ['./ticket-new.component.css']
})
export class TicketNewComponent implements OnInit {

  message: string = '';

  ticketForm = this.formBuilder.group({
    appName: [''],
    description: [''],
    status: ['']
  })

  constructor(
    private ticketService: TicketService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { 
 
  }

  ngOnInit() {

  }

  get appNameControl(): FormControl {
    return this.ticketForm.get('appName') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.ticketForm.get("description") as FormControl;
  }

  get statusControl(): FormControl {
    return this.ticketForm.get("status") as FormControl;
  }

  onSubmit() {
    console.warn('form submitted.', this.ticketForm);
    console.log('form appName: ', this.appNameControl.value);
    console.log('form description: ', this.descriptionControl.value);
    console.log('form status: ', this.statusControl.value);

    let ticket: Ticket;
    
    ticket = {id: 0,
                    appName: this.appNameControl.value,
                    description: this.descriptionControl.value,
                    status: this.statusControl.value}
    
    this.ticketService.addTicket(ticket)
    .subscribe( t => this.message = 'added ticket.');

    this.ticketForm.reset();


  }

  goBack(): void {
    this.location.back();
  }

}
