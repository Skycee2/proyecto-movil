import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  alumnos=[]



  //CREAMOS LAS VARIABLES NECESARIAS DE TRABAJO:
  usuarios: any[] = [
    {
      rut: '11.111.111-1',
      nom_completo: 'Satan',
      fecha_nac: '1990-03-24',
      semestre: 1,
      password: 'satan123',
      tipo_usuario: 'administrador'
    },
    {
      rut: '11.111.111-2',
      nom_completo: 'Satan',
      fecha_nac: '1990-03-24',
      semestre: 1,
      password: 'satan123',
      tipo_usuario: 'alumno'
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

  modificarUsuario(usuario){
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

  //MÉTODO CUSTOMER:
  //validar rut y contraseña: método que recibe rut y password y me entrega un JSON de un usuario
  validarRutPassword(rut, pass){
    return this.usuarios.find(u => u.rut == rut && u.password == pass);
  }

  cambiarPass(usuario, pass){
    var index = this.usuarios.findIndex(usu => usu.rut == usuario.rut);
    usuario.pwd = pass;
    console.log(usuario.pwd)
    this.usuarios[index] = usuario;
    console.log(this.usuarios[index])
    return this.usuarios[index];
  }


  obtenerUserfromCorreo(correo: string){
    return this.usuarios.find(usu => usu.correo == correo);
  }

}
