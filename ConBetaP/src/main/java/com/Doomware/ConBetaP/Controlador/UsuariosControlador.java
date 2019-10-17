package com.Doomware.ConBetaP.Controlador;

import com.Doomware.ConBetaP.Exception.ResourceNotFoundException;
import com.Doomware.ConBetaP.Modelo.Usuarios;
import com.Doomware.ConBetaP.Repositorio.UsuariosRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class UsuariosControlador {
    @Autowired
    UsuariosRepositorio usr;

    @GetMapping("/usuarios")
    public List<Usuarios> index(){
        return usr.findAll();
    }

    @GetMapping("/usuarios/{id}")
    public Usuarios getById(@PathVariable(value = "id") int usuarioId) {
        Usuarios usuario = usr.findByIdusuario(usuarioId);
        return usuario;
    }

    @GetMapping("/login/{correo}")
    public Usuarios getByCorreo(@PathVariable(value = "correo") String usuarioCorreo) {
        Usuarios usuario = usr.findByCorreo(usuarioCorreo);
        return usuario;
    }

}
