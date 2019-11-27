package com.Doomware.ConBetaP.Controlador;

import com.Doomware.ConBetaP.Modelo.Cotizacion;
import com.Doomware.ConBetaP.Repositorio.CotizacionRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class CotizacionControlador {

    @Autowired
    CotizacionRepositorio ctz;

    @GetMapping("/cotizacionID/{id}")
    public Cotizacion getCotizacionById(@PathVariable(value="id") int idcotizacion){ return ctz.findById(idcotizacion); }

    @PostMapping("/cotizacion")
    public Cotizacion createCotizacion(@RequestBody Cotizacion cotizacion){
        Cotizacion cot = ctz.saveAndFlush(cotizacion);
        return cot;
    }
}
