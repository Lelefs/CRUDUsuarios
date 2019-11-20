import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    public salvar (usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>((environment.host + '/users'), usuario)
    }

    public getUsuario (): Usuario {
        let usuario = new Usuario()
        usuario.nome = "Leandro"
        usuario.sobrenome = "Finochio"

        return usuario
    }

    public delete(email: string): Observable<Usuario> {
        return this.http.delete<Usuario>(environment.host + `/removerUsuario/${email}`)
    }

    public listaUsuarios(): Observable<Usuario[]> { 
        return this.http.get<Usuario[]>(environment.host + '/listaUsuarios')
    }

}