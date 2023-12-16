import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // usuario: Usuario = new Usuario()
  // nome = "Rute Helen Costa"
  // foto = "https://www.github.com/rHelen.png"
  // id = environment.id
  // tipo = environment.tipo

  //Opção com classe exterior
  // usuario: Usuario = new Usuario()
  // nome = this.UserFixo.usuarioFixo.nome
  // foto = this.UserFixo.usuarioFixo.foto
  // id = this.UserFixo.usuarioFixo.id
  // tipo = this.UserFixo.usuarioFixo.tipo

  usuarioFixo = {
    "id": 1,
    "nome":"Rute Helen Costa",
    "usuario":"rute@email.com",
    "senha":"12345678",
    "foto":"https://www.github.com/rHelen.png",
    "tipo": "Padrão"
    }

  usuario: Usuario = new Usuario()
  nome = this.usuarioFixo.nome
  foto = this.usuarioFixo.foto
  id = this.usuarioFixo.id
  tipo = this.usuarioFixo.tipo

  constructor(
    private auth: AuthService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    //if(environment.token == ''){
      // alert('Sua sessão expirou, faça login novamente!')
      //this.router.navigate(['/login'])
    //}
    this.findByIdUsuario()
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.id).subscribe((resp: Usuario) => {
      this.usuario = resp
      console.log(this.usuario)
    })
  }

  }
