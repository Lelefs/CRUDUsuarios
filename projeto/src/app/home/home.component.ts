import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../classes/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public usuario: Usuario
    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
        this.usuario = this.usuarioService.getUsuario();
    }

}
