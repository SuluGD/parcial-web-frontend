import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../models/entidad.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-entidad-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './entidad-list.component.html',
  styleUrls: ['./entidad-list.component.css']
})
export class EntidadListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nit', 'nombre', 'actions'];
  dataSource = new MatTableDataSource<Entidad>();

  constructor(private entidadService: EntidadService) { }

  ngOnInit(): void {
    this.loadEntidades();
  }

  loadEntidades(): void {
    this.entidadService.getAll().subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Error loading entidades:', error);
      }
    );
  }

  deleteEntidad(id: number): void {
    if (confirm('¿Está seguro de eliminar esta entidad?')) {
      this.entidadService.delete(id).subscribe(
        () => {
          this.loadEntidades();
        },
        error => {
          console.error('Error deleting entidad:', error);
        }
      );
    }
  }
} 