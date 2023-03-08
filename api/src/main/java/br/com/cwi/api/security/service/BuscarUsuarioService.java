package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.mapper.UsuarioMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class BuscarUsuarioService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private UsuarioMapper usuarioMapper;


    public UsuarioResponse buscar() {

        try {
            Usuario usuarioAutenticado = usuarioAutenticadoService.get();
            return usuarioMapper.toResponse(usuarioAutenticado);
        } catch (Exception e) {
            throw  new ResponseStatusException(BAD_REQUEST, "Autenticação inválida", e);
        }


    }
}
