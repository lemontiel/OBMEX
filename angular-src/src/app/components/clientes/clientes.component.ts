import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CommonModule} from '@angular/common'
import {Router} from '@angular/router';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  //Initialize the data variable.
  data:Object [] =
  [
    {
    name : String,
    email : String,
    contactName : String,
    phoneNumber : String,
    state : String,
    curse : String
    }
  ];


  constructor(private authService : AuthService,
              private router : Router,
              private commonModule : CommonModule) { }

  ngOnInit() {
    this.authService.getClients().subscribe(arrayClient =>{
      for(var i = 0; i < arrayClient.client.length; i++){
        this.data[i] = {
          name : arrayClient.client[i].name,
          email : arrayClient.client[i].email,
          contactName : arrayClient.client[i].contactName,
          phoneNumber : arrayClient.client[i].phoneNumber,
          state : arrayClient.client[i].state,
          curse : arrayClient.client[i].curse
        };
      }
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
