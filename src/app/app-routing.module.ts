import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'ticket',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./ticket/tickets/tickets.component').then(
          m => m.TicketsComponent),
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./ticket/ticket-editor/ticket-editor.component').then(
          m => m.TicketEditorComponent)
      },
      {
        path: 'create',
        loadComponent: () => import('./ticket/ticket-create/ticket-create.component').then(
          m => m.TicketCreateComponent)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
