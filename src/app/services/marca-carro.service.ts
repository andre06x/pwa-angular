import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MarcaCarro } from '../models/MarcaCarro';

interface CarResponse {
  Makes: Array<any>;
}
@Injectable({
  providedIn: 'root',
})
export class MarcaCarroService {
  private API_CARROS =
    'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes';
  private API_SEGUROS = 'http://localhost:9000/api';

  constructor(private http: HttpClient) {}

  private mapMarcas(marcas: MarcaCarro[]) {
    return marcas.map((marca: any) => ({
      codigo: marca.make_id,
      nome: marca.make_display,
    }));
  }
  public getMarcas(): Observable<MarcaCarro[]> {
    return this.http
      .get(this.API_SEGUROS + '/makes')
      .pipe(map((res: any) => this.mapMarcas(res.Makes)));
  }
}
