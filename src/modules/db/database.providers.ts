import { EnvsConfig } from 'src/infra/config/envs.config';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: EnvsConfig.getHostDatabase(),
        port: EnvsConfig.getPortDatabase(),
        username: EnvsConfig.getUserDatabase(),
        password: EnvsConfig.getPasswordDatabase(),
        database: EnvsConfig.getSchemaDatabase(),
        entities: [
          User,
        ],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

