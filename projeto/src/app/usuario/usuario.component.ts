import { Component, OnInit } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService]
})
export class UsuarioComponent implements OnInit {

    public usuarios: Usuario[]
    constructor(private usuarioService: UsuarioService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.listaUsuarios()
    }

    public listaUsuarios() {
        this.usuarioService.listaUsuarios().subscribe(
            response => {
                this.usuarios = response
            },
            error => {
                alert('Não foi possível carregar a lista de usuários.')
            }
        )
    }

    public delete(usuario) {

        this.confirmationService.confirm({
            message: `Você tem certeza que deseja deletar o usuário <b>${(usuario.nome)} ${(usuario.sobrenome)}</b>?`,
            accept: () => {
                this.usuarioService.delete(usuario.email).subscribe(
                    response => {
                        this.listaUsuarios()
                    },
                    error => {
                        alert('Não foi possível deletar este usuário.')
                    }
                )
            }
        });

    }

    public editar(usuario) {
console.log(usuario)
       /*  this.usuarioService.editar(usuario.email).subscribe(
            response => {
                this.listaUsuarios()
            },
            error => {
                alert('Não foi possível deletar este usuário.')
            }
        ) */

    }

}