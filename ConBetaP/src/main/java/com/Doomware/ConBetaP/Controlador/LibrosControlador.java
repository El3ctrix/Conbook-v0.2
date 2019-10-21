package com.Doomware.ConBetaP.Controlador;
import com.Doomware.ConBetaP.Modelo.Libros;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.Doomware.ConBetaP.Repositorio.LibrosRepositorio;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class LibrosControlador {
    @Autowired
    LibrosRepositorio lbr;

    @GetMapping("/libros")
    public List<Libros> getLibrosLst(){
        return lbr.findAll();
    }

    @GetMapping("/libros/{aprobado}")
    public List<Libros> getLibroByStatus(@PathVariable(value = "aprobado")boolean aprobado){
        return lbr.findByAprobado(aprobado);
    }

    @GetMapping("/libros/{id}")
    public Libros getLibroById(@PathVariable(value="id") int idLibro){
        return lbr.findById(idLibro);
    }
}
