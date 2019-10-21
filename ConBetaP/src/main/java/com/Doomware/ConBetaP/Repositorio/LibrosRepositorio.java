package com.Doomware.ConBetaP.Repositorio;

import com.Doomware.ConBetaP.Modelo.Libros;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LibrosRepositorio extends JpaRepository<Libros, Integer> {
    List<Libros> findAll();
    List<Libros> findByAprobado(boolean aprobado);
    Libros findById(int id);
}
