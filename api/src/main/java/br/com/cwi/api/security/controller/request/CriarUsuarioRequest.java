package br.com.cwi.api.security.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.List;

@Getter @Setter
public class CriarUsuarioRequest {
    @NotBlank
    @Size(max = 255)
    private String nomeCompleto;
    @NotNull @Email @Size(max = 255)
    private String email;
    @NotNull
    private LocalDate dataNascimento;
    @Size(max = 50)
    private String telefone;
    @NotBlank
    private String senha;
    @Size(max = 512)
    private String imagemPerfil;


}
