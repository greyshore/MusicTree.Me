//// Erik Paul 100 Relationships
// Erik Paul 100 Studied_Bassoon_With Brenda Casciani 5107
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 100 AND b.musicianID= 5107
CREATE
(a)-[r:Studied_Bassoon_With {startYear: 2013, endYear: 2020,verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName, r.startYear;

//// Nick Fox 6001 Relationships
// Studied_Bassoon_With Brenda Casciani 5107
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 6001 AND b.musicianID= 5107
CREATE
(a)-[r:Studied_Bassoon_With {startYear: 2014, endYear: 2020,verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName, r.startYear;

// Studied_Bassoon_With Dr John Bebe 6002
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 6001 AND b.musicianID= 6002
CREATE
(a)-[r:Studied_Bassoon_With {startYear: 2020, endYear: 2024,verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName, r.startYear;