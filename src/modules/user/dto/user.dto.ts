import { IsNotEmpty, IsString, } from "class-validator";

/**
 * Classe que representa o formulario de cadastro de usuario
 *
 * @author Luiz Fernando Oliveira
 */
export class AuthDto {
    @IsString(
        { message: 'E-mail inválido' }
    )
    @IsNotEmpty({ message: 'Informe o e-mail' })
    dsEmail: string;

    @IsString(
        { message: 'Senha inválida' }
    )
    @IsNotEmpty({ message: 'Informe a senha' })
    dsSenha: string;
}
