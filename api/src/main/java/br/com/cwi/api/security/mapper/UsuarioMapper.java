package br.com.cwi.api.security.mapper;

import br.com.cwi.api.security.controller.request.CriarUsuarioRequest;
import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.domain.Permissao;
import br.com.cwi.api.security.domain.Usuario;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;


@Component
@Mapper
public interface UsuarioMapper {

   Usuario toEntity(CriarUsuarioRequest request);

   UsuarioResponse toResponse(Usuario entity);



}
