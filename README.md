# Musical Heritage: MusicTree.Me

This open source project is based on the work of [Dr. Sasha Gee Enegren](https://www.sashabassoon.com/), who envisioned the concept and invested years of research into historical and current data from bassoonists and oboists around the world. It is originally intended to connect generations of double reed students and teachers to visually document teaching lineage, cross-relations, and constellation teachers who have impacted entire generations of double reed players in the United States.

Dr. Enegren has been collecting this information for many years, including work with the New York Philharmonic archives. She continues to enrich the data by presenting the work at gatherings such as the [Glickman Popkin Bassoon Camp](https://www.bassooncamp.com/) and presenting the work at the [2022 Internationaal Double Reed Society conference](https://idrs2022.org/sessions/lecture-sasha-enegren/).

A proof-of-concept application to collect data and display a musical heritage 'family tree' was created for Dr. Enegren by Todd Sanders. That work was the inspiration to create this open source project and re-imagine the relationships of musicians as a directed graph that could accomodate all instrument types and expand to additional relationships that musicians have with ensembles and composers.

## Technical Concepts

The original data collected by Dr. Enegren was stored in a relational database. For this open source project the data has been migrated to a [Neo4j graph database](https://neo4j.com/). The production application data is hosted on an instance of [Neo4j AuraDB](https://neo4j.com/cloud/platform/aura-graph-database/); a shared AuraDB development environment has also been provisioned. Local development is configured for a free [Neo4j Desktop](https://neo4j.com/product/developer-tools/) environment.

The application that allows for collection of information, navigating the graph, and establishing musical relationships, is deployed to and hosted on [Heroku](https://www.heroku.com/). The application code is based on [Node.js](https://nodejs.org/), [TypeScript](https://www.typescriptlang.org/), and [React](https://reactjs.org/), and leverages the [Neo4j Javascript driver](https://neo4j.com/developer/javascript/) for data access.

### Technical Resources - For More Information

If you are interested in contributing to this project, thank you! If you'd like to learn more about the technologies behind the MusicTree.Me application, the following tutorials and guides can be helpful:

- [Building Neo4j Applications with Node.js](https://neo4j.com/developer/javascript/): This is a great introduction to Neo4j, Node.js, and a test driven development approach. It does not incorporate TypeScript, but the link below brings it all together.
- [Building a Web Application with Neo4j and NestJS](https://medium.com/neo4j/building-a-modern-web-application-with-neo4j-and-nestjs-b51ffd8268fa): This article and series is the basis for the technical approach to the MusicTree.Me application.
- [NestJS](https://nestjs.com/): for more details on the NestJS framework for Node applications.

## Neo4j Graph Data Model

The initial version of MusicTree.Me is focused on relationships between Musicians who have either taught or studied with other Musicians, so that we can explore the relationships of musicians and their overall impact on the field. To represent this in a graph database, the Nodes (rounded rectangles) and Relationships (triangles), along with their Labels and Properties are illustrated below:

![Musical Heritage Graph: V1](README.assets/Musical%20Heritage%20Model-V1.png "Musical Heritage Graph: V1")

Future versions of MusicTree.Me can extend this model to include additional nodes and relationships, for example:

![Musical Heritage Graph: VNext](README.assets/Musical%20Heritage%20Model-VNext.png "Musical Heritage Graph: VNext")

## Build and Run Locally

ToDo

## Contributing

ToDo

### Open Source Owners and principal contributors

- Dr. Sasha Gee Enegren: Product Owner
- Erik Paul: Product Manager
- Marjani Hall: Principal Designer
- Paula Paul: Principal Engineer
