import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {

  //vamos a crear variables:
  user: string;
  password: string;

  constructor(private toastController: ToastController, private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  //vamos a crear un método:
  login(){
    var usuarioLogin = this.usuarioService.validarRutPassword(this.user, this.password);

    //validar que al ingresar admin admin en el formulario, me diga hola:
    if (usuarioLogin != undefined) {
      if (usuarioLogin.tipo_usuario == 'administrador') {
        this.router.navigate(['/administrador']);
      }else if(usuarioLogin.tipo_usuario == 'profesor'){
        this.router.navigate(['/docente']);
      }else{
        this.router.navigate(['/alumno']);
      }
    }else{
      this.toastError();
    }
  }

  async toastError() {
    const toast = await this.toastController.create({
      message: 'USUARIO O CONTRASEÑA INCORRECTOS!',
      duration: 3000
    });
    toast.present();
  }

}