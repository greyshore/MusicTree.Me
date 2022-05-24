# Data: README

All data for this project can be reconstituted from the files in this directory.

## Prerequisites

- Neo4j
- Basic familiarity with Cypher

## Clean and reload all data

1. Delete all existing nodes and relationships

~~~
MATCH (n)
DETACH DELETE n
~~~

2. Load Musician Nodes, starting with Musician:Bassoon

- Copy all .csv files in this directory to your Neo4j database 'import' directory
- Execute the following Cypher command:

~~~
LOAD CSV WITH HEADERS FROM 'file:///0001_MUSICIAN_BASSOON.csv' AS row
WITH 
toString(row.firstName) as firstName, 
toString(row.middleName) as middleName,
toString(row.lastName) as lastName, 
toString(row.prefix) as prefix, 
toString(row.suffix) as suffix, 
toString(row.email) as email, 
toString(row.pronouns) as pronouns, 
toString(row.currentPosition) as currentPosition, 
toString(row.currentOrganization) as currentOrganization, 
toString(row.genderIdentity) as genderIdentity, 
toString(row.nationality) as nationality, 
toString(row.website) as website,
toInteger(row.birthYear) as birthYear, 
toInteger(row.deathYear) as deathYear,
toInteger(row.musicianID) as musicianID, 
date(row.lastModified) as lastModified 
MERGE (m:Musician:Bassoon {musicianID: musicianID})
 ON CREATE SET
 m.firstName = firstName,
 m.middleName = middleName,
 m.lastName = lastName,
 m.prefix = prefix,
 m.suffix = suffix,
 m.email = email,
 m.pronouns = pronouns,
 m.currentPosition = currentPosition,
 m.currentOrganization = currentOrganization,
 m.genderIdentity = genderIdentity,
 m.website = website,
 m.nationality = nationality,
 m.birthYear = birthYear,
 m.deathYear = deathYear,
 m.lastModified= lastModified
RETURN m limit 10;
~~~

3. Add a unique index on MusicianID, and a full text search on full name:

Execute the following Cypher commands to ensure MusicianID remains unique, and enable a full text search index on full name:

~~~
CREATE CONSTRAINT musicianID_is_unique FOR (n:Musician) REQUIRE (n.musicianID) IS UNIQUE;

CREATE FULLTEXT INDEX musicianFullName FOR (n:Musician) ON EACH [n.firstName, n.lastName];
~~~

4. Load additional Musician Nodes, in order:

Using the exact 'LOAD CSV' command above, modify the file names to create nodes for additional musicians:

~~~
LOAD CSV WITH HEADERS FROM 'file:///0002_MUSICIAN_OBOE.csv' AS row
WITH... 
...

LOAD CSV WITH HEADERS FROM 'file:///0003_MUSICIAN_ENGLISH_HORN.csv' AS row
WITH... 
...

LOAD CSV WITH HEADERS FROM 'file:///0004_MUSICIAN_SAXOPHONE.csv' AS row
WITH... 
...

LOAD CSV WITH HEADERS FROM 'file:///0005_MUSICIAN_PIANO.csv' AS row
WITH... 
...

~~~

5. Unfortunately, at the time of this writing, CSV imports do not support establishing multiple labels for nodes on creation. Since some Musicians play multiple instruments, establish those additional labels by executing the MUSICIANS_ADDITIONAL_LABELS.cyp Cypher script.

If you would like to do this from a terminal prompt, using the [neo4j-client](https://neo4j-client.net/), the command can be executed similar to the following example:

1. Now that we have all the Musicians imported and labeled with the instruments they play, add the relationships between musicians who have studied together as a directed relationship (student Musician --> Studied_[Instrument]_With --> another Musician).

Establish those relationships by executing the STUDIED_WITH_RELATIONSHIPS.cyp Cypher script.

7. Explore your graph with Neo4j Bloom!