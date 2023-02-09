/**
 * Classe que estabelece o padrao de resposta das requisicoes
 * 
 * @author Luiz Fernando Oliveira
 */
export class HttpResponse {

    /**
     * Utilizado para devolver erros de negocio e de sistema
     * para o usuario
     * 
     * @param codigo number
     * @param mensagem string
     */
    static erro(codigo: number, erro: string, paylaod?: string[]){
        if(paylaod){
            return {
                codigo: codigo,
                mensagem:  erro,
                payload:  paylaod
            };
        }else{
            return {
                codigo: codigo,
                mensagem:  erro,
                payload:  paylaod
            };            
        }

    }


    /**
     * Utilizado para devolver mensagem de sucesso para
     * o usuario
     * @param parametro
     */
    static sucesso(mensagem?: string, payload?: any){
        if(!mensagem && !payload){
            throw new Error('Informe pelo menos um dos parametros');
        }
        if(mensagem && !payload){
            return {
                codigo: 0,
                mensagem: mensagem
            };
        }else if(!mensagem && payload){
            return {
                codigo: 0,
                payload: payload
            };
        }else{
            return {
                codigo: 0,
                mensagem: mensagem,
                payload: payload
            };
        }
    }
}