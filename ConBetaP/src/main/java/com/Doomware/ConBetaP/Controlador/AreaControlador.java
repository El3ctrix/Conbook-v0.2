package com.Doomware.ConBetaP.Controlador;


import com.Doomware.ConBetaP.Modelo.Area;
import com.Doomware.ConBetaP.Repositorio.AreaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class AreaControlador {
    @Autowired
    AreaRepositorio arp;

    @GetMapping("/areaID/{id}")
    public Area getAreaById(@PathVariable(value="id") int idarea){ return arp.findById(idarea); }
}
