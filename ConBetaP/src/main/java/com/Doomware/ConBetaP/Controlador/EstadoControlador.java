package com.Doomware.ConBetaP.Controlador;

import com.Doomware.ConBetaP.Modelo.Estado;
import com.Doomware.ConBetaP.Repositorio.AreaRepositorio;
import com.Doomware.ConBetaP.Repositorio.EstadoRepositorio;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class EstadoControlador {
    @Autowired
    EstadoRepositorio est;

    @GetMapping("/estadoID/{id}")
    public Estado getEstadoById(@PathVariable(value="id") int idestado){ return est.findById(idestado); }
}
