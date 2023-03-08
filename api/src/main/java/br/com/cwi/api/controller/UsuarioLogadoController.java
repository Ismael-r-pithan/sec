package br.com.cwi.api.controller;

import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.service.BuscarUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/me")
public class UsuarioLogadoController {

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @GetMapping
    public UsuarioResponse perfil() {
        return buscarUsuarioService.buscar();
    }

}
