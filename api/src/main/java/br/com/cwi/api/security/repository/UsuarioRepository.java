package br.com.cwi.api.security.repository;

import br.com.cwi.api.security.domain.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findByEmail(String email);

    boolean existsByEmail(String email);

    Page<Usuario> findByEmailNot(String email, Pageable pageable);

    @Query("SELECT u FROM Usuario u WHERE u.nomeCompleto = :search OR u.email = :search AND u.id <> :userId")
    Page<Usuario> findByNameOrEmail(Pageable pageable, String search, Long userId);
}
