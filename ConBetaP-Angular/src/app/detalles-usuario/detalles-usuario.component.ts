import { Component, OnInit , Input } from '@angular/core';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../usuario.service';
import { ListaUsuarioComponent } from '../lista-usuario/lista-usuario.component';
import { ActivatedRoute, Router } from '@angular/router';
import {Area} from '../Area';
import {AreaService} from '../area.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;
  area: Area;

  constructor(private route: ActivatedRoute, private router: Router,
              private usuarioService: UsuarioService,
              private areaService: AreaService) { }

  ngOnInit() {

    this.usuario = new Usuario();
    this.area = new Area();
    this.id = this.route.snapshot.params.id;

    this.usuarioService.getUsuario(this.id)
      .subscribe(data => {
        console.log(data);
        this.usuario = data;
        this.areaService.getArea(this.usuario.idarea)
          .subscribe(res => {
            console.log(res);
            this.area = res;
          })
      });
  }

  list() {
    this.router.navigate(['usuarios']);
  }
}
