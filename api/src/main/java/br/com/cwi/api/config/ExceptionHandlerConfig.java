package br.com.cwi.api.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;

@ControllerAdvice
public class ExceptionHandlerConfig {

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ErrorResponse> handleResponseStatusException(ResponseStatusException ex) {
        HttpStatus status = ex.getStatus();
        ErrorResponse error = new ErrorResponse(status.value(), ex.getReason());
        return new ResponseEntity<>(error, status);
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class ErrorResponse {

        private int status;
        private String message;

        @Override
        public String toString() {
            return this.getMessage();
        }
    }
}

