import { HttpException, HttpStatus } from "@nestjs/common";

/**
 * Excecao utilizada para erros de sistema. Sempre que disparada,
 * o usuario recebera um status code de 500 (Internal Error)
 * 
 * @author Nuage IT
 */
export class SystemException extends HttpException {

    /**
     * Construtor
     * 
     * @param mensagem Mensagem que sera enviada para o cliente
     * @param mensagemOriginal Mensagem de erro original de erro
     * @param codigo Codigo de negocio retornado na resposta
     */
    constructor(mensagem: string, 
        public mensagemOriginal: string = undefined, public codigo: number = 1){
        super(mensagem, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}