import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Material Imports
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { EntidadListComponent } from './components/entidad-list/entidad-list.component';
import { EntidadFormComponent } from './components/entidad-form/entidad-form.component';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    EntidadListComponent,
    EntidadFormComponent,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/entidades', pathMatch: 'full' },
      { path: 'entidades', component: EntidadListComponent },
      { path: 'entidades/nueva', component: EntidadFormComponent },
      { path: 'entidades/:id/editar', component: EntidadFormComponent }
    ])
  ],
  providers: []
})
export class AppModule { }