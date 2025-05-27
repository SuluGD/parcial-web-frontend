import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../models/entidad.model';

@Component({
  selector: 'app-entidad-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './entidad-form.component.html',
  styleUrls: ['./entidad-form.component.css']
})
export class EntidadFormComponent implements OnInit {
  entidadForm: FormGroup;
  isEditMode = false;
  entidadId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private entidadService: EntidadService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.entidadForm = this.fb.group({
      nit: ['', [Validators.required]],
      nombre: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.entidadId = +id;
      this.loadEntidad(this.entidadId);
    }
  }

  loadEntidad(id: number): void {
    this.entidadService.getById(id).subscribe(
      entidad => {
        this.entidadForm.patchValue(entidad);
      },
      error => {
        console.error('Error loading entidad:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.entidadForm.valid) {
      const entidad: Entidad = this.entidadForm.value;
      
      if (this.isEditMode && this.entidadId) {
        this.entidadService.update(this.entidadId, entidad).subscribe(
          () => {
            this.router.navigate(['/entidades']);
          },
          error => {
            console.error('Error updating entidad:', error);
          }
        );
      } else {
        this.entidadService.create(entidad).subscribe(
          () => {
            this.router.navigate(['/entidades']);
          },
          error => {
            console.error('Error creating entidad:', error);
          }
        );
      }
    }
  }
} 