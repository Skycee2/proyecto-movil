import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/usuario';



@Component({
  selector: 'app-modificar-pass',
  templateUrl: './modificar-pass.page.html',
  styleUrls: ['./modificar-pass.page.scss'],
})
export class ModificarPassPage implements OnInit {

  usuario : Usuario
  password: string;
  verificar_password: string;

  constructor(private toastController: ToastController, private actRoute: ActivatedRoute, private router: Router, private UsuarioService:UsuarioService) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe( paramMap => {
      this.usuario = this.UsuarioService.obtenerUsuario(paramMap.get('rut'))
    })  
  }


  cambiar(){
    if (this.password != this.verificar_password) {
      this.toastError();
      return;
    }

    var cambioPass = this.UsuarioService.cambiarPass(this.usuario, this.password );
    console.log(cambioPass)
    if ( cambioPass != undefined ) 
    {
      this.router.navigate(['/login']);
    }else{
      this.toastError1();
    }
  } 


  async toastError() {
    const toast = await this.toastController.create({
      message: 'contraseñas no coinciden',
      duration: 3000
    });
    toast.present();
  }


  async toastError1() {
    const toast = await this.toastController.create({
      message: 'error contraseña no funciona',
      duration: 3000
    });
    toast.present();
  }
}

