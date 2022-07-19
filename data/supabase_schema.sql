/* tsqllint-disable error keyword-capitalization */
/* tsqllint-disable error invalid-syntax */
  create table public.profiles (
    id uuid references auth.users not null,
    created_at timestamptz not null default current_timestamp,
    email varchar not null,
    primary key (id)
  );

  create table public.instruments (
    id serial not null,
    name varchar not null,
    category varchar not null,
    primary key (id)
  );
  
  create table public.profile_instruments (
    id serial not null,
    profile_id uuid references public.profiles(id) not null,
    instrument_id serial references public.instruments(id) not null,
    created_at timestamptz not null default current_timestamp,
    primary key (id)
  );

  create table public.profile_students (
    id uuid references public.profiles not null,
    created_at timestamptz not null default current_timestamp,
    student_id uuid references public.profiles(id) not null,
    primary key (id)
  );

  create table public.profile_teachers (
    id uuid references public.profiles not null,
    created_at timestamptz not null default current_timestamp,
    teacher_id uuid references public.profiles(id) not null,
    primary key (id)
  );

INSERT INTO public.instruments(name, category)
VALUES ('Bassoon', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Contrabassoon', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('English Horn', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Oboe', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Clarinet', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Bass Clarinet', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Flute', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Piccolo', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Alto Saxophone', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Baritone Saxophone', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Soprano Saxophone', 'Woodwind');

INSERT INTO public.instruments(name, category)
VALUES ('Tenor Saxophone', 'Woodwind');



INSERT INTO public.instruments(name, category)
VALUES ('Harpsichord', 'Keyboard');

INSERT INTO public.instruments(name, category)
VALUES ('Organ', 'Keyboard'); 

INSERT INTO public.instruments(name, category)
VALUES ('Piano', 'Keyboard');


INSERT INTO public.instruments(name, category)
VALUES ('Baritone/Euphonium', 'Brass'); 

INSERT INTO public.instruments(name, category)
VALUES ('French Horn', 'Brass'); 

INSERT INTO public.instruments(name, category)
VALUES ('Trombone', 'Brass'); 

INSERT INTO public.instruments(name, category)
VALUES ('Bass Trombone', 'Brass'); 

INSERT INTO public.instruments(name, category)
VALUES ('Trumpet/Coronet', 'Brass'); 

INSERT INTO public.instruments(name, category)
VALUES ('Tuba/Sousaphone', 'Brass');


INSERT INTO public.instruments(name, category)
VALUES ('Bass', 'Strings'); 

INSERT INTO public.instruments(name, category)
VALUES ('Cello', 'Strings'); 

INSERT INTO public.instruments(name, category)
VALUES ('Harp', 'Strings'); 

INSERT INTO public.instruments(name, category)
VALUES ('Viola', 'Strings'); 

INSERT INTO public.instruments(name, category)
VALUES ('Violin', 'Strings');


INSERT INTO public.instruments(name, category)
VALUES ('Drum', 'Percussion'); 

INSERT INTO public.instruments(name, category)
VALUES ('Timpani', 'Percussion'); 

INSERT INTO public.instruments(name, category)
VALUES ('Xylophone', 'Percussion'); 

INSERT INTO public.instruments(name, category)
VALUES ('Tubed Percussion', 'Percussion');
