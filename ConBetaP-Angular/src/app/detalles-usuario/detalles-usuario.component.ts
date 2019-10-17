import { Component, OnInit , Input } from '@angular/core';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../usuario.service';
import { ListaUsuarioComponent } from '../lista-usuario/lista-usuario.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;

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

  list() {
    this.router.navigate(['usuarios']);
  }
}
