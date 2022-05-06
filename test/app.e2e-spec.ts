import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Neo4jService } from 'src/neo4j/neo4j.service';
import { Neo4jModule } from 'src/neo4j/neo4j.module';
import { Neo4jConfig } from 'src/neo4j/neo4j-config.interface';
import { NEO4J_CONFIG, NEO4J_DRIVER } from 'src/neo4j/neo4j.constants';
import { AppModule } from 'src/app.module';
import { createDriver } from 'src/neo4j/neo4j.util';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, Neo4jModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
