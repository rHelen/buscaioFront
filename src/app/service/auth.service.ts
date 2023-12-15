import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient
  ) { }


entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin>{
  return this.http.post<UsuarioLogin>('http://localhost:9000/usuarios/logar', userLogin)
  console.log(userLogin)
}

// entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin>{
//   return this.http.post<UsuarioLogin>('https://buscaio.herokuapp.com/usuarios/logar', userLogin)
// }

cadastrar(user: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>('http://localhost:9000/usuarios/cadastrar', user)
}

// cadastrar(user: Usuario): Observable<Usuario>{
//   return this.http.post<Usuario>('https://buscaio.herokuapp.com/usuarios/cadastrar', user)
// }

atualizar(usuario: Usuario): Observable<Usuario>{
  return this.http.put<Usuario>('http://localhost:9000/usuarios/atualizar', usuario)
}
// atualizar(usuario: Usuario): Observable<Usuario>{
//   return this.http.put<Usuario>('https://buscaio.herokuapp.com/usuarios/atualizar', usuario, this.token)
// }

getByIdUsuario(id: number): Observable<Usuario>{
  return this.http.get<Usuario>(`http://localhost:9000.com/usuarios/${id}`)
}
// getByIdUsuario(id: number): Observable<Usuario>{
//   return this.http.get<Usuario>(`https://localhost:9000.com/usuarios/${id}`, this.token)
// }

// token = {
//   headers: new HttpHeaders().set('Authorization', environment.token)
// }

// refreshToken() {
//   this.token = {
//     headers: new HttpHeaders().set('Authorization', environment.token)
//   }
// }

// logado(){
//   let ok = false

//   if(environment.token =''){
//     ok = true
//   }

  // return ok
// }

}
