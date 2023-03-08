package br.com.cwi.api.security.service;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaImagemPerfilService {

    public void validar(String imagemPerfil) {

        Pattern pattern = Pattern.compile("^https?://(?!.*\\.exe$).*$");

        Matcher matcher = pattern.matcher(imagemPerfil);

        if (!matcher.find()) {
            throw new ResponseStatusException(BAD_REQUEST, "Link para imagem precisa começar com https ou http");
        }
    }
}
