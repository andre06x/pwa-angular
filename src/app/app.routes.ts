import { Routes } from '@angular/router';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { ListarSegurosComponent } from './components/listar-seguros/listar-seguros.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listar' },
  { path: 'cadastro', component: CadastroSeguroComponent },
  { path: 'listar', component: ListarSegurosComponent },
];
