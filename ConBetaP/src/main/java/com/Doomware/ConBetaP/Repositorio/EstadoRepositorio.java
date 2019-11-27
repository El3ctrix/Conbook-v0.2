package com.Doomware.ConBetaP.Repositorio;

import com.Doomware.ConBetaP.Modelo.Estado;
import org.springframework.data.jpa.repository.JpaRepository;
public interface EstadoRepositorio extends JpaRepository<Estado, Integer> {
    Estado findById(int id);
}
