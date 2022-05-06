import { Test, TestingModule } from '@nestjs/testing';
import { Neo4jService } from './neo4j.service';
import { Neo4jModule } from './neo4j.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Neo4jConfig } from './neo4j-config.interface';

describe('Neo4jService', () => {
  let service: Neo4jService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Neo4jService],
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

    service = module.get<Neo4jService>(Neo4jService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
