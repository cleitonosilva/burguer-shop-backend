import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mssql',
      // host: '177.149.209.130',
      host: 'burguershop.ddns.net',

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