package com.Doomware.ConBetaP.Modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "area")
public class Area {

    private int idarea;
    private String area;

    public Area(){}

    public Area(int idarea, String area){
        this.idarea = idarea;
        this.area = area;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getIdarea() {
        return idarea;
    }

    public void setIdarea(int idarea) {
        this.idarea = idarea;
    }

    @Column(name = "area")
    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }
}
