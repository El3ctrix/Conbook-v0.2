package com.Doomware.ConBetaP.Controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class MailControlador {

    private JavaMailSender javaMailSender;

    @RequestMapping(value= "/sendMail/{mail}")
    public ResponseEntity<String> sendMail(@PathVariable(value ="mail") String mail){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(mail);
        msg.setSubject("Prueba de REST API");
        msg.setText("Esto es una Prueba.");
        javaMailSender.send(msg);
        return new ResponseEntity<String>("Mail Send to " + mail, HttpStatus.OK);
    }
}
