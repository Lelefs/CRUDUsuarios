import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

    public usuario: Usuario = new Usuario()
    public id = '';
    constructor(private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params._id;
        if (this.id) {
            this.usuarioService.usuarioPorId(this.id).subscribe(resp => {
                this.usuario = resp;
            });
        }
    }

    public salvar() {
        this.usuarioService.salvar(this.usuario).subscribe(
            response => {
                this.router.navigate(['/usuario']);
            },
            error => {
                alert('Não foi possível salvar o usuário.')
            }
        )
    }

    public editar() {
        this.usuarioService.editar(this.usuario).subscribe(
            response => {
                this.router.navigate(['/usuario']);
            },
            error => {
                alert('Não foi possível salvar o usuário.')
            }
        )
    }

}