package com.Doomware.ConBetaP.Repositorio;

import com.Doomware.ConBetaP.Modelo.Area;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AreaRepositorio extends JpaRepository<Area, Integer> {
    Area findById(int id);
}
