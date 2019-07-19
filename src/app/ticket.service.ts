import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Ticket } from './ticket';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  private ticketHostname = 'http://localhost:8080';
  private ticketUrl = '/ticket';
  
  constructor(
    private http: HttpClient
  ) { }

  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.ticketHostname + this.ticketUrl)
      .pipe(
        tap( t => this.log('fetched tickets')),
        catchError(this.handleError<Ticket[]>(`getTickets`, []))
      );
  }

  getTicket(id: number): Observable<Ticket> {
    const url = this.ticketHostname +  this.ticketUrl + "/" + id;
    this.log(url);
    return this.http.get<Ticket>(url).pipe(
      tap( t => this.log(`fetched ticket id=${id}`)),
      catchError(this.handleError<Ticket>(`getTicket id=${id}`))
    );
  }

  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.ticketHostname + this.ticketUrl, 
                                  ticket, httpOptions).pipe(
        tap( _ => this.log(`ticket created.`) ),
        catchError(this.handleError<Ticket>('addTicket'))                            
                                  )
                          
  }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string){
    console.log(`TicketService: ${message}`);
  }

}
