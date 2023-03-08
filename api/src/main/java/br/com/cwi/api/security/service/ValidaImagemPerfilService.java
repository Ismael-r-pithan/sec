package br.com.cwi.api.security.service;


import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.CONFLICT;

@Service
public class ValidaImagemPerfilService {

    public void validar(String imagemPerfil) {
        Pattern pattern = Pattern.compile("^https?://.*");

        Matcher matcher = pattern.matcher(imagemPerfil);

        if (!matcher.find()) {
            throw new ResponseStatusException(BAD_REQUEST, "Link para imagem precisa começar com https ou http");
        }
    }
}
