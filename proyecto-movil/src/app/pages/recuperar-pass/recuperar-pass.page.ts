import { Component, OnInit } from '@angular/core';
import { ModificarPassPageModule } from './modificar-pass/modificar-pass.module';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {
  
  

  constructor(private toastController: ToastController, actRoute: ActivatedRoute, private router: Router, private usuarioService:UsuarioService) { }

  correo: string;

  ngOnInit() {
  }

  modificarPasslink(){
    var usuarioMod = this.usuarioService.obtenerUserfromCorreo(this.correo)
    this.router.navigate(['/recuperar-pass', usuarioMod.rut]);
  }


  async toastError2() {
    const toast = await this.toastController.create({
      message: 'Error correo no existe!',
      duration: 3000
    });
    toast.present();
  }


}
