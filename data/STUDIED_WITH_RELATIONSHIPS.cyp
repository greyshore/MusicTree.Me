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

//// Begin import of Sasha spreadsheet relationships

//// Mark Timmerman 295 Relationships
// Studied Bassoon with Sol Schoenbach 350
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 295 AND b.musicianID= 350
CREATE
(a)-[r:Studied_Bassoon_With {startYear: 1984, endYear: 1985, verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Bernard Garfield 213
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 295 AND b.musicianID= 213
CREATE
(a)-[r:Studied_Bassoon_With {startYear: 1985, endYear: 1988, verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Amy Pollard 202 Relationships
// Studied Bassoon with William Ludwig 346
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 202 AND b.musicianID= 346
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Eric Stomberg 355
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 202 AND b.musicianID= 355
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Myles Minguan Yang 308 Relationships
// Studied Bassoon with Frank Morelli 102
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 308 AND b.musicianID= 102
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Wendy Rose 343
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 308 AND b.musicianID= 343
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with William Ludwig 346
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 308 AND b.musicianID= 346
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Kathleen McLean 354
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 308 AND b.musicianID= 354
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;
