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
@Table(name = "libros")
public class Libros {
    private int idlibro;
    private String nombrelibro;
    private boolean aprobado;
    private String codigoisbn;
    private String fechadecreacion;
    private String responsable;
    private int estado;

    public Libros() {}

    public Libros(int idlibro, String nombrelibro, boolean aprobado, String codigoisbn,
                  byte archivos, String fechadecreacion, String responsable, int estado){
        this.idlibro = idlibro;
        this.nombrelibro = nombrelibro;
        this.aprobado = aprobado;
        this.codigoisbn = codigoisbn;
        this.fechadecreacion = fechadecreacion;
        this.responsable = responsable;
        this.estado = estado;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getIdlibro() {
        return idlibro;
    }

    public void setIdlibro(int idlibro) {
        this.idlibro = idlibro;
    }

    @Column(name = "nombrelibro")
    public String getNombrelibro() {
        return nombrelibro;
    }

    public void setNombrelibro(String nombrelibro) {
        this.nombrelibro = nombrelibro;
    }

    @Column(name = "aprobado")
    public boolean getAprobado() {
        return aprobado;
    }

    public void setAprobado(boolean aprobado) {
        this.aprobado = aprobado;
    }

    @Column(name = "codigoisbn")
    public String getCodigoisbn() {
        return codigoisbn;
    }

    public void setCodigoisbn(String codigoisbn) {
        this.codigoisbn = codigoisbn;
    }

    @Column(name = "fechadecreacion")
    public String getFechadecreacion() {
        return fechadecreacion;
    }

    public void setFechadecreacion(String fechadecreacion) {
        this.fechadecreacion = fechadecreacion;
    }

    @Column(name = "responsable")
    public String getResponsable() {
        return responsable;
    }

    public void setResponsable(String responsable) {
        this.responsable = responsable;
    }

    @Column(name = "estado")
    public int getEstado() { return estado; }

    public void setEstado(int estado) { this.estado = estado; }
}
