import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  //VAMOS A CREAR NUESTRO ALUMNO:
  alumno = new FormGroup({
    rut : new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nom_completo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo : new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{1,4}.[A-Za-z]{1,20}@duocuc.cl|[A-Za-z]{1,4}.[A-Za-z]{1,20}@duoc.cl|[A-Za-z]{1,4}.[A-Za-z]{1,20}@profesor.duoc.cl')]),
    fecha_nac: new FormControl('', Validators.required),
    semestre: new FormControl('', [Validators.required, Validators.min(1)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    tipo_usuario: new FormControl('alumno')
  });


  //VAMOS A CREAR EL ARREGLO QUE TENDRA TODOS LOS USUARIOS REGISTRADOS DESDE EL SERVICIO:
  //usuarios: any[] = [];
  verificar_password: string;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    //this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  //método que desencadena el formulario con el boton submit:
  

  registrar(){
    if (this.alumno.controls.password.value != this.verificar_password) {
      alert('CONTRASEÑAS NO COINCIDEN!');
      return;
    }
    this.usuarioService.agregarUsuario(this.alumno.value);
    alert('ALUMNO REGISTRADO!');
    this.router.navigate(['/login']);
    this.alumno.reset();
    this.verificar_password = '';
  }


 

}
