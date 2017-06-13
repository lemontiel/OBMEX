import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registrarcliente',
  templateUrl: './registrarcliente.component.html',
  styleUrls: ['./registrarcliente.component.css']
})
export class RegistrarclienteComponent implements OnInit {

  name : string;
  email : string;
  contactName : string;
  phoneNumber : string;
  state : string;
  curse : string;

  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit() {
  }
  registerSubmit(){

    const client = {
      name : this.name,
      email : this.email,
      contactName : this.contactName,
      phoneNumber : this.phoneNumber,
      state : this.state,
      curse : this.curse
    }

    this.authService.addClient(client).subscribe(data =>{
      if(data.success){
        console.log("Client Added");
        this.router.navigate(['/clientes']);
      }
      else{
        console.log("Something broke :(");
        this.router.navigate(['/registrarcliente']);
      }
    });
  }
}
