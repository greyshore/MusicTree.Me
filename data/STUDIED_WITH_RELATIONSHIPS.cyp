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

//// Wendy Rose 343 Relationships
// Studied Bassoon with David Carroll 353
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 343 AND b.musicianID= 353
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Christopher Weait 356
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 343 AND b.musicianID= 356
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Christopher Millard 223
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 343 AND b.musicianID= 223
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Hugh Cooper 358
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 343 AND b.musicianID= 358
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Richard Beene 359
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 343 AND b.musicianID= 359
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// William Ludwig 346 Relationships
// Studied Bassoon with John Patterson 362
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 346 AND b.musicianID= 362
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Leonard Sharrow 357
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 346 AND b.musicianID= 357
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Bernard Garfield 213
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 346 AND b.musicianID= 213
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Arthur Weisburg 360
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 346 AND b.musicianID= 360
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Cristian Coliver 226 Relationships
// Studied Bassoon with Hector Barrios 254
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 226 AND b.musicianID= 254
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Omar Ascanio 314
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 226 AND b.musicianID= 314
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Jesus Acosta 361
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 226 AND b.musicianID= 361
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Geronis Bravo 248
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 226 AND b.musicianID= 248
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Filiberto Nunez 239
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 226 AND b.musicianID= 239
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Ruben Osher 330
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 226 AND b.musicianID= 330
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Leonardo Dean 286
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 226 AND b.musicianID= 286
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;
