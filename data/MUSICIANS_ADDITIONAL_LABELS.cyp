// Additional instruments: Erik Paul Bassoon node (100)
match (n:Musician {musicianID: 100})
set n :Saxophone:Piano:Clarinet:Contrabassoon:Flute
return n;