import { Routes } from '@angular/router';
import { EntidadListComponent } from './components/entidad-list/entidad-list.component';
import { EntidadFormComponent } from './components/entidad-form/entidad-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/entidades', pathMatch: 'full' },
  { path: 'entidades', component: EntidadListComponent },
  { path: 'entidades/nueva', component: EntidadFormComponent },
  { path: 'entidades/:id/editar', component: EntidadFormComponent }
];
