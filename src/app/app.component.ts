import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { ListarSegurosComponent } from './components/listar-seguros/listar-seguros.component';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MenuComponent,
  ],
})
export class AppComponent {
  title = 'pwa-angular';
}
