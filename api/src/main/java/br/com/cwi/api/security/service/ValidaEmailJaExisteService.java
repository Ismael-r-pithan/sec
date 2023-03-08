package br.com.cwi.api.security.service;

import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import static org.springframework.http.HttpStatus.CONFLICT;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ValidaEmailJaExisteService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public void validar(String email) {
        if(usuarioRepository.existsByEmail(email)){
            throw new ResponseStatusException(CONFLICT, "E-mail já cadastrado");
        }
    }
}
