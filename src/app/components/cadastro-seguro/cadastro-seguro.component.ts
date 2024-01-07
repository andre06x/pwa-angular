import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { MarcaCarro } from '../../models/MarcaCarro';
import { MarcaCarroService } from '../../services/marca-carro.service';
import { Seguro } from '../../models/Seguro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-seguro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [MarcaCarroService],
  templateUrl: './cadastro-seguro.component.html',
  styleUrl: './cadastro-seguro.component.css',
})
export class CadastroSeguroComponent implements OnInit {
  public seguro = new Seguro();
  public marcasCarros$: Observable<MarcaCarro[]> | undefined;

  constructor(private marcaCarroService: MarcaCarroService) {}

  ngOnInit() {
    this.marcasCarros$ = this.marcaCarroService.getMarcas();
  }

  adicionar() {}

  enviarNotificacao() {}
}
