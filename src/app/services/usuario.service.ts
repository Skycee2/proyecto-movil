import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //CREAMOS LAS VARIABLES NECESARIAS DE TRABAJO:
  usuarios: any[] = [
    {
      rut: '11.111.111-1',
      nom_completo: 'seba montero',
      fecha_nac : '2000-03-30',
      semestre: 3,
      password: 'diosito',
      tipo_usuario: 'administrador'

    }
  ];

  constructor() { }

  //MÉTODOS NECESARIOS DEL CRUD:
  agregarUsuario(usuario): boolean{
    if ( this.obtenerUsuario(usuario.rut) == undefined ) {
      this.usuarios.push(usuario);
      return true;
    }
    return false;
  }
  eliminarUsuario(rut: string){
    this.usuarios.forEach((usu, index) => {
      if (usu.rut == rut) {
        this.usuarios.splice(index, 1);
      }
    });
  }

  actualizarUsuario(usuario){
    var index = this.usuarios.findIndex(usu => usu.rut == usuario.rut);
    this.usuarios[index] = usuario;
  }

  obtenerUsuario(rut: string){
    return this.usuarios.find(usu => usu.rut == rut);
  }

  obtenerUsuarios(){
    return this.usuarios;
  }

  //MÉTODO CUSTOMER POSIBLES:
  validarLogin(rut, password){
    return this.usuarios.find(usu => usu.rut == rut && usu.password == password);
  }


}
