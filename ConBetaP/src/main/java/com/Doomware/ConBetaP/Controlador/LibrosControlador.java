package com.Doomware.ConBetaP.Controlador;
import com.Doomware.ConBetaP.Modelo.Libros;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Doomware.ConBetaP.Repositorio.LibrosRepositorio;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.logging.Logger;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class LibrosControlador {
    @Autowired
    LibrosRepositorio lbr;

    @GetMapping("/libros")
    public List<Libros> getLibrosLst(){
        return lbr.findAll();
    }

    @GetMapping("/libros/{aprobado}")
    public List<Libros> getLibroByStatus(@PathVariable(value = "aprobado")boolean aprobado){
        return lbr.findByAprobado(aprobado);
    }

    @GetMapping("/details/{id}")
    public Libros getLibroById(@PathVariable(value="id") int idLibro){
        return lbr.findById(idLibro);
    }

    @PostMapping("/libros")
    public Libros createLibros(@RequestBody Libros libro){
        Libros libros = lbr.saveAndFlush(libro);
        return libros;
    }

    @RequestMapping(value= "/upload")
    public ResponseEntity<String> fileUpload(@RequestParam("file") MultipartFile file) throws IOException {
        Logger logger = Logger.getLogger(LibrosControlador.class.getName());
        InputStream inputStream = file.getInputStream();
        String orignalName = file.getOriginalFilename();
        String name = file.getName();
        String contentType = file.getContentType();
        long size = file.getSize();
        File convertFile = new File("/home/el3ctrix/AngularUploads/" + orignalName);
        convertFile.createNewFile();
        try{
            FileOutputStream fout = new FileOutputStream(convertFile);
            fout.write(file.getBytes());
        }catch(IOException e){
            e.printStackTrace();
        }

        logger.info("inpuStream: " + inputStream);
        logger.info("originalName: " + orignalName);
        logger.info("name: " + name);
        logger.info("contentType: " + contentType);
        logger.info("size: " + size);
        return new ResponseEntity<String>(orignalName, HttpStatus.OK);
    }
}
