package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.request.CriarUsuarioRequest;
import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.domain.Permissao;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.mapper.UsuarioMapper;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


@Service
public class IncluirUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ValidaEmailJaExisteService validaEmailJaExisteService;

    @Autowired
    private ValidaImagemPerfilService validaImagemPerfilService;

    @Autowired
    private UsuarioMapper usuarioMapper;


    public UsuarioResponse incluir(CriarUsuarioRequest request) {

        validaEmailJaExisteService.validar(request.getEmail());

        Usuario usuario = usuarioMapper.toEntity(request);
        usuario.setSenha(passwordEncoder.encode(request.getSenha()));
        usuario.setAtivo(true);
        usuario.setPermissoes(Collections.singletonList(Permissao.builder().nome("USUARIO").usuario(usuario).build()));

        if (usuario.getImagemPerfil() != null) {
            validaImagemPerfilService.validar(request.getImagemPerfil());
        }

        if (usuario.getImagemPerfil() == null) {
            usuario.setImagemPerfil("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsY5yMO2TvuWRKwNjTNsnYrogObuRcJ1L8oHmF-g5WGQ&s");
        }
        usuarioRepository.save(usuario);

        return usuarioMapper.toResponse(usuario);
    }
}
