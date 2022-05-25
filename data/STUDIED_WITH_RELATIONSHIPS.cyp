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

//// Germania Gallegos Allauca 247 Relationships
// Studied Bassoon with Igor Novikov 363
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 247 AND b.musicianID= 363
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Omar Ascanio 314 Relationships
// Studied Bassoon with Martin Vielma 297
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 314 AND b.musicianID= 297
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Miguel Zamora 305
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 314 AND b.musicianID= 305
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Geronis Bravo 248 Relationships
// Studied Bassoon with Filiberto Nunez 239
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 248 AND b.musicianID= 239
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Eduardo Calzada 230 Relationships
// Studied Bassoon with Filiberto Nunez 239
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 230 AND b.musicianID= 239
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Klaus Thunemann 364
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 230 AND b.musicianID= 364
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Gustavo Nuñez 251
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 230 AND b.musicianID= 251
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

///// Begin import of Sasha spreadsheet relationships

//// Gordon Fantini 249 Relationships
// Studied Bassoon with Leonardo Dosso 365
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 249 AND b.musicianID= 365
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Brian Jack 215 Relationships
// Studied Bassoon with Lee Goodhew-Romm 366
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 215 AND b.musicianID= 366
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Glenn Einschlag 367
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 215 AND b.musicianID= 367
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Yoshiyuki Ishikawa 368
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 215 AND b.musicianID= 368
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Stefano Canuti 335 Relationships
// Studied Bassoon with Ovidio Danzi 269
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 335 AND b.musicianID= 269
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Catherine Chen 220 Relationships
// Studied Bassoon with Joyce Kelley 370
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 220 AND b.musicianID= 370
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Marc Goldberg 103
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 220 AND b.musicianID= 103
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Daniel Matsukawa 228
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 220 AND b.musicianID= 228
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Andrea Cellacchi 204 Relationships
// Studied Bassoon with Matthias Rácz 371
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 204 AND b.musicianID= 371
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Malte Refardt 293 Relationships
// Studied Bassoon with Dag Jensen 227
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 293 AND b.musicianID= 227
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Georg Klütsch 244
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 293 AND b.musicianID= 224
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Jaakko Luoma 256 Relationships
// Studied Bassoon with Matti Tossavainen 301
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 256 AND b.musicianID= 301
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Christopher Millard 223 Relationships
// Studied Bassoon with Sol Schoenbach 350
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 223 AND b.musicianID= 350
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Audun Halvorsen 209 Relationships
// Studied Bassoon with Robert Rønnes 325
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 209 AND b.musicianID= 325
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Eirik Birkeland 231
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 209 AND b.musicianID= 231
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Knut Sønstevold 281
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 209 AND b.musicianID= 281
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Ole Kristian Dahl 313
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 209 AND b.musicianID= 313
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Robert Rønnes 325 Relationships
// Studied Bassoon with Knut Bjærke 282
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 325 AND b.musicianID= 282
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Torleif Nedberg 340
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 325 AND b.musicianID= 340
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Carin Miller Packwood 218 Relationships
// Studied Bassoon with Whitney Crockett 345
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 218 AND b.musicianID= 345
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Benjamin Kamins 212
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 218 AND b.musicianID= 212
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Frank Morelli 102
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 218 AND b.musicianID= 102
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Stephen Maxym 108
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 218 AND b.musicianID= 108
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Wendy Holdaway 344 Relationships
// Studied Bassoon with Matthew Ruggiero 300
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 344 AND b.musicianID= 300
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Stephen Maxym 108
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 344 AND b.musicianID= 108
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Rocio Yllescas Jacobo 326 Relationships
// Studied Bassoon with Wendy Holdaway 344
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 326 AND b.musicianID= 344
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Ronald Karten 328
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 326 AND b.musicianID= 328
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Bram Van Sander 214
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 326 AND b.musicianID= 214
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Dag Jensen 227
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 326 AND b.musicianID= 227
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Nancy Goeres 309
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 326 AND b.musicianID= 309
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// José Angel Flores 269 Relationships
// Studied Bassoon with Wendy Holdaway 344
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 269 AND b.musicianID= 344
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Citlali Medina Durán 224 Relationships
// Studied Bassoon with Wendy Holdaway 344
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 224 AND b.musicianID= 344
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Ana Claudia Narváez 203 Relationships
// Studied Bassoon with Wendy Holdaway 344
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 203 AND b.musicianID= 344
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Jaqueline Zárate 257 Relationships
// Studied Bassoon with Wendy Holdaway 344
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 257 AND b.musicianID= 344
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Élihu Ricardo Ortiz León 232 Relationships
// Studied Bassoon with Wendy Holdaway 344
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 232 AND b.musicianID= 344
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Rex Gulson 322 Relationships
// Studied Bassoon with Ronald Tyree 329
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 322 AND b.musicianID= 329
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Kim Walker 279
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 322 AND b.musicianID= 279
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Michael McCraw 303
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 322 AND b.musicianID= 303
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Armando Salgado Garza 208 Relationships
// Studied Bassoon with Rex Gulson 322
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 208 AND b.musicianID= 322
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Fernando Traba 237 Relationships
// Studied Bassoon with Timoteo Traba 339
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 237 AND b.musicianID= 339
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Timoteo Traba 339 Relationships
// Studied Bassoon with George Goslee 372
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 339 AND b.musicianID= 372
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Michael O’Donovan 304 Relationships
// Studied Bassoon with Norman Herzberg 373
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 304 AND b.musicianID= 373
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Kirkland Ferris 280 Relationships
// Studied Bassoon with Norman Herzberg 373
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 280 AND b.musicianID= 373
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Lazar Stoychev 285 Relationships
// Studied Bassoon with Hristo Proshkov 374
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 285 AND b.musicianID= 374
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Sergio Rentería Castillo 332 Relationships
// Studied Bassoon with Michael O’Donovan 304
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 332 AND b.musicianID= 304
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Neil McDonald 310
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 332 AND b.musicianID= 310
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Luciano Magnanini 290
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 332 AND b.musicianID= 290
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Lazar Stoychev 285
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 332 AND b.musicianID= 285
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Joep Terwey 265
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 332 AND b.musicianID= 265
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Brian Pollard 216
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 332 AND b.musicianID= 216
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Alfredo Lopez Anguiano 201
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 332 AND b.musicianID= 201
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Kirkland Ferris 280
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 332 AND b.musicianID= 280
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Jerzy Lemiszka 261 Relationships
// Studied Bassoon with Benedykt Górecki 211
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 261 AND b.musicianID= 211
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Victor Osadzin 342
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 261 AND b.musicianID= 342
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Jose Garcia 266 Relationships
// Studied Bassoon with Lazar Stoychev 285
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 266 AND b.musicianID= 285
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Rodolfo Mota 375
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 266 AND b.musicianID= 375
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Piotr Turkin 320
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 266 AND b.musicianID= 320
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Nylsa Evelia Avalos Caballero 312 Relationships
// Studied Bassoon with Lazar Stoychev 285
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 312 AND b.musicianID= 285
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Manuel Hernández 376
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 312 AND b.musicianID= 376
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Joel de Santiago Arenas 264 Relationships
// Studied Bassoon with Lazar Stoychev 285
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 264 AND b.musicianID= 285
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Cesáreo Pérez 222 Relationships
// Studied Bassoon with Lazar Stoychev 285
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 222 AND b.musicianID= 285
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// JP Abraham Rueda 270 Relationships
// Studied Bassoon with Lazar Stoychev 285
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 270 AND b.musicianID= 285
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Javier Martínez Olivares 258 Relationships
// Studied Bassoon with Lazar Stoychev 285
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 258 AND b.musicianID= 285
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Ricardo Varela 377
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 258 AND b.musicianID= 377
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Gerardo Ledezma 246 Relationships
// Studied Bassoon with Lazar Stoychev 285
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 246 AND b.musicianID= 285
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Harold Goltzer 253
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 246 AND b.musicianID= 253
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Milan Turković 306
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 246 AND b.musicianID= 306
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Joep Terwey 265
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 246 AND b.musicianID= 265
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Everardo Gastelum Anduaga 235 Relationships
// Studied Bassoon with Lazar Stoychev 285
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 235 AND b.musicianID= 285
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Jerzy Lemiszka 261
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 235 AND b.musicianID= 261
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Piotr Turkin 320
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 235 AND b.musicianID= 320
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Juan Carlos Villaseñor Patino 273 Relationships
// Studied Bassoon with Sergio Renteria Castillo 332
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 273 AND b.musicianID= 332
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Jose Castillo 267
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 273 AND b.musicianID= 267
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Alfredo Lopez Anguiano 201 Relationships
// Studied Bassoon with Louis Salomons 289
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 201 AND b.musicianID= 289
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Luciano Magnanini 290 Relationships
// Studied Bassoon with George Goslee 372
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 290 AND b.musicianID= 372
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Jose Castillo 267 Relationships
// Studied Bassoon with Sergio Azzolini 378
MATCH
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 267 AND b.musicianID= 378
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Frode Cato Carlsen 242 Relationships
// Studied Bassoon with Inge Fjørtoft 379 - conductor/viola, important coach
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 242 AND b.musicianID= 379
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Torleiv Nedberg 340
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 242 AND b.musicianID= 340
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Eirik Birkeland 231
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 242 AND b.musicianID= 231
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Roman Reznik 327 Relationships
// Studied Bassoon with Sergio Azzolini 378
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 327 AND b.musicianID= 378
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Jesús Armendáriz Ramírez 262 Relationships
// Studied Bassoon with Jerzy Lemiszka 261
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 262 AND b.musicianID= 261
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Jose Alberto Barrera 268 Relationships
// Studied Bassoon with Jerzy Lemiszka 261
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 268 AND b.musicianID= 261
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Angel Duran 206 Relationships
// Studied Bassoon with Jerzy Lemiszka 261
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 206 AND b.musicianID= 261
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Juan Pablo Linarez Cruz 274 Relationships
// Studied Bassoon with Jerzy Lemiszka 261
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 274 AND b.musicianID= 261
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Roberto Mendez 380
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 274 AND b.musicianID= 380
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Edith Violeta Gómez Delgado 381
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 274 AND b.musicianID= 381
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Winfred Felton 348 Relationships
// Studied Bassoon with Saxton Rose 349
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 348 AND b.musicianID= 349
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Shanna Welch 333 Relationships
// Studied Bassoon with Saxton Rose 349
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 333 AND b.musicianID= 349
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Ryan Roikola 331 Relationships
// Studied Bassoon with Saxton Rose 349
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 331 AND b.musicianID= 349
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Suzanne Pattison 337
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 331 AND b.musicianID= 337
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Phillip Kandel 319 Relationships
// Studied Bassoon with Saxton Rose 349
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 319 AND b.musicianID= 349
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Keith Sweger 278
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 319 AND b.musicianID= 278
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Ida Cawley 255 Relationships
// Studied Bassoon with Saxton Rose 349
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 255 AND b.musicianID= 349
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Lynn Hileman 292
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 255 AND b.musicianID= 292
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Hana Lee 252
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 255 AND b.musicianID= 252
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Frankie Garcia 240 Relationships
// Studied Bassoon with Saxton Rose 349
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 240 AND b.musicianID= 349
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

// Studied Bassoon with Jennifer Muehrcke 260
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 240 AND b.musicianID= 260
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Colin Jones 225 Relationships
// Studied Bassoon with Saxton Rose 349
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 225 AND b.musicianID= 349
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;

//// Bryce Richardson 217 Relationships
// Studied Bassoon with Saxton Rose 349
 (a:Musician),
 (b:Musician)
WHERE a.musicianID= 217 AND b.musicianID= 349
CREATE
(a)-[r:Studied_Bassoon_With {verified: true}]->(b)
RETURN a.firstName, type(r), b.firstName;