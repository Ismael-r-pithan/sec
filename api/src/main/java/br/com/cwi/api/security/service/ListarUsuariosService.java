package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.mapper.UsuarioMapper;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarUsuariosService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private UsuarioMapper usuarioMapper;

    public Page<UsuarioResponse> listar(Pageable pageable, String search) {
        Usuario usuarioLogado = usuarioAutenticadoService.get();

        if (search != null) {
            return usuarioRepository.findByNameOrEmail(pageable, search, usuarioLogado.getId()).map(usuarioMapper::toResponse);
        }
        return usuarioRepository.findByEmailNot(usuarioLogado.getEmail(), pageable).map(usuarioMapper::toResponse);
    }
}
