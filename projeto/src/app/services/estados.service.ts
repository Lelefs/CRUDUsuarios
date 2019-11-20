import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

    url = "http://servicodados.ibge.gov.br/api/v1/localidades/estados"
    constructor(private http: HttpClient) { }

    getEstados():Observable <any> {
        return this.http.get <any> (this.url)
    }

}