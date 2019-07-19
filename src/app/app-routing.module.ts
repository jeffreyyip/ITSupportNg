import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketNewComponent } from './ticket-new/ticket-new.component';

const routes: Routes = [
  {path: '', redirectTo: '/tickets', pathMatch: 'full'},
  {path: 'tickets', component: TicketListComponent },
  {path: 'detail/:id', component: TicketDetailComponent },
  {path: 'new', component: TicketNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
