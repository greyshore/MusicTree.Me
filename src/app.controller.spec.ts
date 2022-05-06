import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Neo4jModule } from './neo4j/neo4j.module';
import { Neo4jConfig } from './neo4j/neo4j-config.interface';
import { AppService } from './app.service';
import { Neo4jService } from './neo4j/neo4j.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        Neo4jService
      ],
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        Neo4jModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService): Neo4jConfig => ({
            scheme: configService.get('NEO4J_SCHEME'),
            host: configService.get('NEO4J_HOST'),
            port: configService.get('NEO4J_PORT'),
            username: configService.get('NEO4J_USERNAME'),
            password: configService.get('NEO4J_PASSWORD'),
            database: configService.get('NEO4J_DATABASE'),
          }),
        }),
      ]
    }).compile();

    appController = app.get<AppController>(AppController);
    
  });

  describe('root', () => {
    it('should return "Hello MusicTree.Me!"', () => {
      expect(appController.getHello()).toBe('Hello MusicTree.Me!');
    });
  });
});
