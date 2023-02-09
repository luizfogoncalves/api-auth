import {
    Injectable, Logger, Inject
} from '@nestjs/common';
import { UnauthorizedException } from 'src/infra/exceptions/unauthorized.exception';
import { compareHash } from 'src/util/decode.hash';
import { Repository } from 'typeorm';
import { User } from '../db/entities/user.entity';
import { AuthDto } from './dto/user.dto';

@Injectable()
export class UserService {
    /**
     * Logger
     */
    private readonly logger = new Logger(UserService.name);

    /**
     * Constructor
     */
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }


    /**
     * Autentica usuario
     *
     */
    async userLogin(dto: AuthDto): Promise<User> {
        try {
            this.logger.log('Iniciando a autenticacao do usuario -> ', dto.dsEmail);

            const user = await this.userRepository.findOne({
                where: {
                    dsEmail: dto.dsEmail
                }
            });
            console.log('user', user);

            if (user) {
                const valid = await compareHash(dto.dsSenha, user.dsSenha);
                console.log('valid', valid);
                if (!valid) throw new UnauthorizedException('Credenciais inválidas')
            }
            
            return user
        } catch (error) {
            this.logger.error(
                'Ocorreu um erro ao listar os usuários.' + error.stack,
            );
            throw error;
        }
    }
}
