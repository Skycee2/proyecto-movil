import { Component, OnInit } from '@angular/core';
import { ModificarPassPageModule } from './modificar-pass/modificar-pass.module';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {
  

  constructor(private actRoute: ActivatedRoute, private router: Router, private usuarioService:UsuarioService) { }

  correo: string;

  ngOnInit() {
  }

  modificarPasslink(){
    var usarioMod = this.usuarioService.obtenerUserfromCorreo(this.correo)
    this.router.navigate(['/recuperar-pass', usarioMod.id]);
  }



}
