package com.Doomware.ConBetaP.Repositorio;

import com.Doomware.ConBetaP.Modelo.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface UsuariosRepositorio extends JpaRepository<Usuarios, Integer>{
    List<Usuarios> findAll();
    Usuarios findByIdusuario(int id);
}
