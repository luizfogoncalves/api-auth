// Copyright (C) 2021 Surf Telecom - Todos os direitos reservados


import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common";

/**
 * Excecao utilizada para erros de negocio onde o registro nao foi encontrado. 
 * Sempre que disparada, o usuario recebera um status code de 404 (Not Found)
 * 
 * @author Nuage IT
 */
export class RecordNotFoundException extends HttpException {

    constructor(mensagem: string, public codigo: number = 0){
        super(mensagem, HttpStatus.NOT_FOUND);
    }


}