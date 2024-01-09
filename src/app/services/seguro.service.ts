import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seguro, interfaceSeguro } from '../models/Seguro';
import { Observable } from 'rxjs';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root',
})
export class SeguroService {
  private API_SEGUROS = 'https://api-seguro.onrender.com/api';

  constructor(
    private http: HttpClient,
    private onlineOfflineService: OnlineOfflineService
  ) {
    this.ouvirStatusConexao();
    if (this.onlineOfflineService.isOnline) {
      this.buscarSalvos();
    }
  }

  salvar(seguro: Seguro) {
    if (this.onlineOfflineService.isOnline) {
      this.cadastrar(seguro);
    } else {
      const dados: string | [] = localStorage.getItem('dados') || [];
      localStorage.setItem('dados', JSON.stringify([...dados, seguro]));
      console.log('Salvar seguro no banco local');
    }
  }
  cadastrar(seguro: Seguro) {
    this.http.post(this.API_SEGUROS + '/seguros', seguro).subscribe(() => {
      alert('Seguro cadastrado com sucesso');
    });
  }

  listar(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.API_SEGUROS + '/seguros');
  }

  private async ouvirStatusConexao() {
    this.onlineOfflineService.statusConexao.subscribe((online) => {
      if (online) {
        this.buscarSalvos();
      } else {
        console.log('Estou offline');
      }
    });
  }
  public async buscarSalvos() {
    let dados: string | any = localStorage.getItem('dados') || [];

    this.cadastrar(JSON.parse(dados));
    localStorage.clear();
  }
}
