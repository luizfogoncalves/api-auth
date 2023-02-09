// Copyright (C) 2021 Surf Telecom - Todos os direitos reservados


import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common";

/**
 * Excecao utilizada para erros de serviço indisponível ou em manutenção.
 * Sempre que disparada, o usuario recebera um status code de 503 (Service Unavailable)
 *
 * @author Nuage IT
 */
export class UnavailableException extends HttpException {

  constructor(mensagem: string, public codigo: number = 0){
      super(mensagem, HttpStatus.SERVICE_UNAVAILABLE);
  }

}
