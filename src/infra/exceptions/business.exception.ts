// Copyright (C) 2021 Surf Telecom - Todos os direitos reservados


import { HttpException, HttpStatus } from "@nestjs/common";

/**
 * Excecao utilizada para erros de negocio. Sempre que disparada,
 * o usuario recebera um status code de 400 (Bad Request)
 * 
 * @author Nuage IT
 */
export class BusinessException extends HttpException {

    /**
     *Construtor
     
     * @param mensagem Mensagem de negocio
     * @param codigoNegocio Codigo de negocio
     */
    constructor(mensagem: string, public codigoNegocio: number = 0){
        super(mensagem, HttpStatus.BAD_REQUEST);
    }

}