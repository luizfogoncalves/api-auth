/**
 * Classe responsavel por centralizar os acesso
 * a todas as variaveis de ambiente.
 *
 * @author Luiz Fernando Oliveira
 */
export class EnvsConfig {

    /**
     * Retorna a porta a qual o servidor irá escutar as
     * requisicoes.
     */
    static getServerPort() {
        return process.env.PORT || 3001;
    }

    /**
     * Retorna TRUE se a aplicacao estiver sendo
     * executada em producao
     */
    static isAmbienteDesenvolvimento() {
        return this.getAmbiente() === 'DEV';
    }

    /**
     * Retorna o ambiente em que a aplicacao
     * esta sendo executada
     */
    static getAmbiente() {
        return process.env.AMBIENTE || 'DEV';
    }

    /**
     * Retorna o database host
     */
    static getHostDatabase() {
        return process.env.DB_HOST || 'localhost';
    }

     /**
     * Retorna o database host
     */
    static getPortDatabase() {
        return parseInt(process.env.DB_PORT) || 5432;
    }

     /**
     * Retorna o database host
     */
     static getUserDatabase() {
        return process.env.DB_USER || 'postgres';
    }

     /**
     * Retorna o database host
     */
     static getPasswordDatabase() {
        return process.env.DB_PASSWORD || 'password';
    }

     /**
     * Retorna o database host
     */
     static getSchemaDatabase() {
        return process.env.DB_SCHEMA || 'appdb';
    }

}
