import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { UsuarioService } from '../usuario.service';
import {Usuario} from '../Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usuario: Usuario;
  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  login() {
    this.usuarioService.getByCorreo(this.email)
      .subscribe(data => {
        console.log(data);
        this.usuario = data;
      });

    if (this.email === this.usuario.correo) {
      this.router.navigate(['usuarios']);
    }
  }
}
