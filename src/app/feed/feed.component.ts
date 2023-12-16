import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Categoria = new Categoria()
  //listaTemas: any[] = [{"id":1,"tema":"Tecnologia"},{"id":1,"tema":"Programação"}]
  listaTemas: Categoria[]
  idTema: number

  usuario: Usuario = new Usuario()
  idusuario = 1
  foto = "https://www.github.com/rHelen.png"
  nome = "Rute Helen Costa"
  tipo = "Padrão"


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private categoriaService: CategoriaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    // if(environment.token == ''){
    //   this.router.navigate(['/login'])
    // }
    //sthis.authService.refreshToken()

    //Tirando o get de temas pra deixar fixo
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.categoriaService.getAllTema().subscribe((resp: Categoria[]) => {
    this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.categoriaService.getAllTema().subscribe((resp: Categoria[]) => {
      this.listaTemas = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idusuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      console.log(this.usuario)
    })
  }

  publicar(){
    let usuarioPost: Usuario = {
      "id": 1,
      "nome":"Rute Helen Costa",
      "usuario":"rute@email.com",
      "senha":"12345678",
      "foto":"https://www.github.com/rHelen.png",
      "tipo": "Padrão",
      "postagem": []
      }

    this.tema.id = this.idTema
    this.postagem.categoria = this.tema

    this.usuario.id = 1
    this.postagem.usuario = usuarioPost

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }


}
