import { Controller } from "@nestjs/common";
import { Body, Post } from "@nestjs/common/decorators";
import { HttpResponse } from "src/infra/http/http.response";
import { AuthDto } from "./dto/user.dto";
import { UserService } from "./user.service";

/**
 * Classe de controller da API de Cache
 *
 * @author Luiz Fernando Gonçalves
 */
@Controller('v1/login')
export class UserController {
    /**
     * Construtor
     * @param userService UserService
     */
    constructor(private userService: UserService) { }

    @Post('/')
    async createUser(@Body() dto: AuthDto) {
        const retorno = await this.userService.userLogin(dto);
        return HttpResponse.sucesso('Operacao realizada com sucesso', retorno);
    }
}
