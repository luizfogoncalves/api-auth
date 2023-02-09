import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Classe que representa a tabela TB_USUARIO
 *
 * @author Luiz Fernando Oliveira
 */
@Entity({ name: 'tb_usuario' })
export class User {

    @PrimaryGeneratedColumn({ name: 'co_usuario' })
    coUsuario: number;

    @Column({ name: "nm_usuario", nullable: false })
    nmUsuario: string;

    @Column({ name: "ds_email", nullable: false })
    dsEmail: string;

    @Column({ name: "ds_senha", nullable: false })
    dsSenha: string;

    @Column({ name: "nu_documento", nullable: false })
    nuDocumento: string;

    @Column({ name: "ds_link_foto", nullable: true })
    dsLinkFoto: string;
}
