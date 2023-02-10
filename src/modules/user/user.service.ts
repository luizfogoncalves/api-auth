import {
    Injectable, Logger, Inject
} from '@nestjs/common';
import { UnauthorizedException } from 'src/infra/exceptions/unauthorized.exception';
import { compareHash } from 'src/util/decode.hash';
import { Repository } from 'typeorm';
import { User } from '../db/entities/user.entity';
import { AuthDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { EnvsConfig } from 'src/infra/config/envs.config';

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
        private jwtService: JwtService,
    ) { }


    /**
     * Autentica usuario
     *
     */
    async userLogin(dto: AuthDto): Promise<{ access_token: string }> {
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

            delete user.dsSenha

            const token = await this.gerarToken(user)

            return token
        } catch (error) {
            this.logger.error(
                'Ocorreu um erro ao autenticar o usuário -> ' + `${dto.dsEmail}. Error ->` + error.stack,
            );
            throw error;
        }
    }

    async gerarToken(dto: User) {
        return {
            access_token: this.jwtService.sign(
                { dsEmail: dto.dsEmail },
                {
                    secret: EnvsConfig.getJwtSecret(),
                    expiresIn: '50s',
                },
            ),
        };
    }
}
