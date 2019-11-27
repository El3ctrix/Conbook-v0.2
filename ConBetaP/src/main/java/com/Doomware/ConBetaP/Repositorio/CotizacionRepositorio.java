package com.Doomware.ConBetaP.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Doomware.ConBetaP.Modelo.Cotizacion;
public interface CotizacionRepositorio extends JpaRepository<Cotizacion, Integer> {
    Cotizacion findById(int id);
    Cotizacion saveAndFlush(Cotizacion cotizacion);
}
