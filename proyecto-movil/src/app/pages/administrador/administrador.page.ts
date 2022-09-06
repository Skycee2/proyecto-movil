import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  //VAMOS A CREAR EL GRUPO DEL FORMULARIO:

  tipoUsuario: any[] = [{
    tipo_usu:'alumno'
  },
  {
    tipo_usu:'docente'
  },
  {
    tipo_usu:'administrador'
  }];

  alumno = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nom_completo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo : new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{1,4}.[A-Za-z]{1,20}@duocuc.cl|[A-Za-z]{1,4}.[A-Za-z]{1,20}@duoc.cl|[A-Za-z]{1,4}.[A-Za-z]{1,20}@profesor.duoc.cl')]),
    fecha_nac: new FormControl('', Validators.required),
    semestre: new FormControl('', [Validators.required, Validators.min(1)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    tipo_usuario: new FormControl('this.tipoUsuario',[])
  });

  //VAMOS A CREAR UNA VARIABLE PARA OBTENER LA LISTA DE USUARIOS DEL SERVICIO DE USUARIOS:
  usuarios: any[] = [];
  verificar_password: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  //método del formulario
  registrar() {
    if (this.alumno.controls.password.value != this.verificar_password) {
      alert('CONTRASEÑAS NO COINCIDEN!');
      return;
    }

    var registrado: boolean = this.usuarioService.agregarUsuario(this.alumno.value);
    if (!registrado) {
      alert('USUARIO YA EXISTE!');
      return;
    }

    alert('ALUMNO REGISTRADO!');
    this.alumno.reset();
    this.verificar_password = '';
  }

  eliminar(rutEliminar) {
    this.usuarioService.eliminarUsuario(rutEliminar);
  }

  buscar(rutBuscar) {
    var alumnoEncontrado = this.usuarioService.obtenerUsuario(rutBuscar);
    this.alumno.setValue(alumnoEncontrado);
    this.verificar_password = alumnoEncontrado.password;
  }

  modificar() {
    //console.log(this.alumno.value);
    this.usuarioService.modificarUsuario(this.alumno.value);
    this.limpiar();
  }

  limpiar() {
    this.alumno.reset();
    this.verificar_password = '';
  }

}


