package com.Doomware.ConBetaP.Modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cotizacion")
public class Cotizacion {
    private int idcotizacion;
    private String nombreimprenta;
    private int montototal;

    public Cotizacion(){}

    public Cotizacion(int idcotizacion, String nombreimprenta, int montototal){
        this.idcotizacion = idcotizacion;
        this.nombreimprenta = nombreimprenta;
        this.montototal = montototal;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getIdcotizacion() {
        return idcotizacion;
    }

    public void setIdcotizacion(int idCotizacion) {
        this.idcotizacion = idCotizacion;
    }

    @Column(name = "nombreimprenta")
    public String getNombreimprenta() {
        return nombreimprenta;
    }

    public void setNombreimprenta(String nombreimprenta) {
        this.nombreimprenta = nombreimprenta;
    }

    @Column(name = "montototal")
    public int getMontototal() {
        return montototal;
    }

    public void setMontototal(int montototal) {
        this.montototal = montototal;
    }
}
