import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import {error} from 'util';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();

    this.id = this.route.snapshot.params.id;

    this.usuarioService.getUsuario(this.id)
      .subscribe(data => {
        console.log(data);
        this.usuario = data;
      });
  }

  updateUsuario() {
    this.usuarioService.updateUsuario(this.id, this.usuario)
      .subscribe(data => console.log(data));
    this.usuario = new Usuario();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateUsuario();
  }

  gotoList() {
    this.router.navigate(['/usuarios']);
  }

}
