package com.Doomware.ConBetaP.Modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 *
 * @author el3ctrix
 */
@Entity
@Table(name = "usuarios")
public class Usuarios {
    private int idusuario;
    private String nombre;
    private String correo;
    private String contraseña;
    private int rol;
    private int idarea;

    public Usuarios(){}

    public Usuarios(int id, String nombre, String correo, String contraseña, int rol, int idarea){
        this.idusuario = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.rol = rol;
        this.idarea = idarea;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getIdusuario() {
        return idusuario;
    }


    public void setIdusuario(int idusuario) {
        this.idusuario = idusuario;
    }

    @Column(name = "Nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Column(name = "Correo")
    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    @Column(name = "Contraseña")
    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    @Column(name = "Rol")
    public int getRol() {
        return rol;
    }

    public void setRol(int rol) {
        this.rol = rol;
    }

    @Column(name = "idarea")
    public int getIdarea() {
        return idarea;
    }

    public void setIdarea(int idarea) {
        this.idarea = idarea;
    }

    @Override
    public String toString() {
        return "Usuario [id=" + idusuario + ", Nombre=" + nombre + ", Correo= " + correo +
                ", Rol=" + rol + "]";
    }
}
