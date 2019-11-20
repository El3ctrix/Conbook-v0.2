package com.Doomware.ConBetaP.Controlador;

import com.Doomware.ConBetaP.Modelo.Usuarios;
import com.Doomware.ConBetaP.Repositorio.UsuariosRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class UsuariosControlador {
    @Autowired
    UsuariosRepositorio usr;

    @GetMapping("/usuarios")
    public List<Usuarios> index(){
        return usr.findAll();
    }

    @GetMapping("/usuarios/{id}")
    public Usuarios getById(@PathVariable(value = "id") int usuarioId) {
        Usuarios usuario = usr.findByIdusuario(usuarioId);
        return usuario;
    }

    @PutMapping("/update/{id}")
    public Usuarios updateUsuario(@RequestBody Usuarios u, @PathVariable("id") int id){
        u.setIdusuario(id);
        return usr.saveAndFlush(u);
    }

    @GetMapping("/login/{correo}")
    public Usuarios getByCorreo(@PathVariable(value = "correo") String usuarioCorreo) {
        Usuarios usuario = usr.findByCorreo(usuarioCorreo);
        return usuario;
    }

    @PostMapping("/usuarios")
    public Usuarios createUsuarios(@RequestBody Usuarios usuarios) {
        Usuarios usuario = usr.saveAndFlush(usuarios);
        return usuario;
    }

    @DeleteMapping("/usuarios/{id}")
    public Usuarios deleteUsuarios(@PathVariable(value = "id") int id){
        Usuarios usuario = usr.findByIdusuario(id);
        ArrayList<Usuarios> list = new ArrayList<>();
        if(usuario != null){
            list.add(usuario);
            usr.deleteInBatch(list);
        }
        return usuario;
    }

    @RequestMapping("/sendMail")
    public ResponseEntity<String> sendMail(@RequestBody Usuarios usuarios){
        String correo = usuarios.getCorreo();
        final String username = "prensascienciasdoomware@gmail.com";
        final String password = "doomware";

        Properties prop = new Properties();
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "587");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.starttls.enable", "true"); //TLS

        Session session = Session.getInstance(prop,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(
                    Message.RecipientType.TO,
                    InternetAddress.parse(correo)
            );
            message.setSubject("Solicitud de Publicación");
            message.setText(usuarios.getNombre()+","
                    + "\n\n A continuación puede encontrar el link en el cual podra realizar su Solicitud: {Link}.\n " +
                    "Podra acceder con esta contraseña temporal: {Contraseña}, una vez relizada la solicitud o pasados 30 minutos, esta contraseña quedara inservible.");

            Transport.send(message);

            System.out.println("Done");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
        Logger logger = Logger.getLogger(UsuariosControlador.class.getName());
        logger.info("Send mail to: " + correo);
        return new ResponseEntity<String>(Integer.toString(117), HttpStatus.OK);
    }
}
