package br.com.cwi.api.security.controller;

import br.com.cwi.api.security.controller.request.CriarUsuarioRequest;
import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.service.IncluirUsuarioService;
import br.com.cwi.api.security.service.ListarUsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IncluirUsuarioService incluirUsuarioService;

    @Autowired
    private ListarUsuariosService listarUsuariosService;

    @PostMapping
    @ResponseStatus(CREATED)
    public UsuarioResponse incluir(@Valid @RequestBody CriarUsuarioRequest request) {
        return incluirUsuarioService.incluir(request);
    }

    @GetMapping
    public ResponseEntity<Page<UsuarioResponse>> listar(@RequestParam(required = false) String search, @PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable)  {
        return ResponseEntity.status(OK).body(listarUsuariosService.listar(pageable, search));
    }


}
