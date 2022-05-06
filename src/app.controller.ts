import { Controller, Get } from '@nestjs/common';
import { Neo4jService } from './neo4j/neo4j.service';

@Controller()
export class AppController {
  constructor(private readonly neo4jService: Neo4jService) {}

  // Default route (for now)
  // Hello MusicTree.Me
  @Get()
  async getHello(): Promise<any> {
    return `Hello MusicTree.Me!`;
  }
  
  // Route /nodes
  // ensure we can connect to Neo4j and count the nodes in the database
  @Get('nodes')
  async getNodes(): Promise<any> {
    const res = await this.neo4jService.read(
      `MATCH (n) RETURN count(n) AS count`,
    );
    return `There are ${res.records[0].get('count')} nodes in the database`;
  }
}
