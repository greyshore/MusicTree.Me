//// Erik Paul 100 Relationships
// Erik Paul 100 Studied_Bassoon_With Sasha 101 and Marc 103
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 100 AND b.musicianID= 101
CREATE
(a)-[r:Studied_Bassoon_With {startYear: 2020, verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName, r.startYear;

MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 100 AND b.musicianID= 103
CREATE
(a)-[r:Studied_Bassoon_With {startYear: 2022, verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName, r.startYear;

// Erik Paul 100 Studied_Saxophone_With Tim 1000
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 100 AND b.musicianID= 1000
CREATE
(a)-[r:Studied_Saxophone_With {startYear: 2019, verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName, r.startYear;

// Erik Paul 100 Studied_Piano_With Patrick 1000
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 100 AND b.musicianID= 2000
CREATE
(a)-[r:Studied_Piano_With {startYear: 2018, verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName, r.startYear;

//// Dr. Sasha Gee Enegren 101 Relationships
// Studied Bassoon with Marc Goldberg 103,  Kim Laskoswki 104, Frank Morelli 102, Mark Popkin 105, Patricia Rogers 106
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 101 AND b.musicianID= 103
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 101 AND b.musicianID= 104
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 101 AND b.musicianID= 102
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 101 AND b.musicianID= 105
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 101 AND b.musicianID= 106
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Dr. Frank Morelli 102 Relationships
// Studied Bassoon with Stephan Maxim 108
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 102 AND b.musicianID= 108
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;