package com.Doomware.ConBetaP.Controlador;

import com.Doomware.ConBetaP.Modelo.Usuarios;
import com.Doomware.ConBetaP.Repositorio.UsuariosRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

    @PutMapping("/update/{id}")
    public Usuarios updateUsuario(@RequestBody Usuarios u, @PathVariable("id") int id){
        u.setIdusuario(id);
        return usr.saveAndFlush(u);
    }

    @GetMapping("/login/{correo}")
    public Usuarios getByCorreo(@PathVariable(value = "correo") String usuarioCorreo) {
        Usuarios usuario = usr.findByCorreo(usuarioCorreo);
        return usuario;
    }

    @PostMapping("/usuarios")
    public Usuarios createUsuarios(@RequestBody Usuarios usuarios) {
        Usuarios usuario = usr.saveAndFlush(usuarios);
        return usuario;
    }

    @DeleteMapping("/usuarios/{id}")
    public Usuarios deleteUsuarios(@PathVariable(value = "id") int id){
        Usuarios usuario = usr.findByIdusuario(id);
        ArrayList<Usuarios> list = new ArrayList<>();
        if(usuario != null){
            list.add(usuario);
            usr.deleteInBatch(list);
        }
        return usuario;
    }
}
