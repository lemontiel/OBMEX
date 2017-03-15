import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
client : any;

  constructor(private http : Http) {

  }

  addClient(client){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/clients/newClient', client, {headers: headers})
    .map(res => res.json());
  }

}
