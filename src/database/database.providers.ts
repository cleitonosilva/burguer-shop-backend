import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sistema',
      password: ')b0m&!N9(',
      database: 'burguer',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];