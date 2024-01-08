import { Component, OnInit } from '@angular/core';
import { SeguroService } from '../../services/seguro.service';
import { Observable } from 'rxjs';
import { Seguro } from '../../models/Seguro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-seguros',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [SeguroService],
  templateUrl: './listar-seguros.component.html',
  styleUrl: './listar-seguros.component.css',
})
export class ListarSegurosComponent implements OnInit {
  public seguros$: Observable<Seguro[]> | undefined;

  constructor(private seguroService: SeguroService) {}

  ngOnInit() {
    this.seguros$ = this.seguroService.listar();
  }
}
