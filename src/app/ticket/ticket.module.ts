import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketsComponent } from './tickets/tickets.component';

import { TicketEditorComponent } from './ticket-editor/ticket-editor.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';


@NgModule({
    imports: [
    CommonModule,
    TicketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TicketsComponent,
    TicketEditorComponent,
    TicketCreateComponent,
]
})
export class TicketModule { }
