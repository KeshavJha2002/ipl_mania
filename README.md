# ipl_mania

## Installation

```code
cd frontend
npm i
npm run dev
```

```code
cd backend
npm i
tsc -w
npm run dev
```

> Make a `.env` file in the backend directory, and copy the contents of `.example.env` in it.

## Database Design

### Schema Design

![Schema design](./static_data/schema_design.png)

### Table Structure

**_public.ipl\_ball\_by\_ball_**

```sql
  CREATE TABLE ipl_ball_by_ball(
    id integer,
    innings integer,
    overs integer,
    ball_number integer,
    batter varchar,
    bowler varchar,
    nonstriker varchar,
    extra_type varchar,
    batsman_run integer,
    extras_run integer,
    total_runs integer,
    non_boundary integer,
    is_wicket_delivery integer,
    player_out varchar,
    kind varchar,
    fielders_involved varchar,
    batting_team varchar
  );
```

**_populating the table_**

```sql
    \copy public.ipl_ball_by_ball FROM '<absolute_path_to_repo>\ipl_mania\static_data\ipl_ball_by_ball.csv' DELIMITER ',' CSV HEADER;
```

**_public.ipl\_match_**

```sql
  CREATE TABLE public.ipl_match(
    id int primary key,
    city varchar,
    match_date date,
    season int,
    match_number varchar,
    team1 varchar,
    team2 varchar,
    venue varchar,
    toss_winner varchar,
    toss_decision varchar,
    super_over varchar,
    winning_team varchar,
    won_by varchar,
    margin varchar,
    win_method varchar,
    player_of_match varchar,
    team1_players varchar[],
    team2_players varchar[],
    umpire1 varchar,
    umpire2 varchar
  );
```

**_populating the table_**

```sql
    \copy public.ipl_match FROM '<absolute_path_to_repo>ipl_mania\static_data\ipl_matches.csv' DELIMITER ',' CSV HEADER;
```

**_public.match\_city_**

```sql
  CREATE TABLE public.match_city(
    venue_id serial primary key,
    city varchar,
    venue varchar
  );
```

**_populating the table_**

```sql
  INSERT INTO public.match_city (city, venue) 
  SELECT DISTINCT ipl_match.city, ipl_match.venue 
  FROM public.ipl_match;

  ALTER TABLE public.match_city ADD COLUMN venue_id SERIAL;

  UPDATE public.match_city 
  SET venue_id = DEFAULT;

  UPDATE public.match_city 
  SET venue_id = venue_id-52;

  ALTER TABLE public.match_city ADD CONSTRAINT pk_match_city PRIMARY KEY (venue_id);

  SELECT venue_id, city, venue
  FROM match_city;
```

**_public.win\_condition_**

```sql
  CREATE TABLE public.win_condition(
    match_id integer primary key,
    super_over varchar,
    winning_team varchar,
    win_method varchar,
    won_by varchar,
    margin varchar
  );
```

**_populating the table_**

```sql
  INSERT INTO public.win_condition (match_id, super_over, winning_team, win_method, won_by, margin) 
  SELECT DISTINCT ipl_match.id, ipl_match.super_over, ipl_match.winning_team, ipl_match.win_method, ipl_match.won_by, ipl_match.margin 
  FROM ipl_match;
```

**_public.toss_**

```sql
  CREATE TABLE public.toss(
    match_id integer primary key,
    toss_winner varchar,
    toss_decision varchar
  );
```

**_populating the table_**

```sql
    INSERT INTO public.toss (match_id, toss_winner, toss_decision) 
    SELECT DISTINCT ipl_match.id, ipl_match.toss_winner, ipl_match.toss_decision
    FROM ipl_match;
```

**_public.matches\_played_**

```sql
  CREATE TABLE public.matches_played(
    match_id integer primary key,
    season int,
    match_date date,
    venue_id integer,
    team1 varchar,
    team2 varchar,
    team1_players varchar[],
    team2_players varchar[],
    umpire1 varchar,
    umpire2 varchar,
    player_of_match varchar,
    foreign key(venue_id) references match_city(venue_id)
  );
```

**_populating the table_**

```sql
    INSERT INTO public.matches_played (match_id, season, match_date, team1, team2, team1_players, team2_players, umpire1, umpire2, player_of_match) 
    SELECT ipl_match.id, ipl_match.season, ipl_match.match_date, ipl_match.team1, ipl_match.team2, ipl_match.team1_players, ipl_match.team2_players, ipl_match.umpire1, ipl_match.umpire2, ipl_match.player_of_match
    FROM ipl_match;

    UPDATE public.matches_played
    SET venue_id = match_city.venue_id
    FROM match_city
    WHERE (match_city.city, match_city.venue) = (SELECT city, venue from ipl_match where ipl_match.id=matches_played.match_id);

    SELECT * FROM matches_played;
```

**_public.extras_**

```sql
  CREATE TABLE public.extras(
    extra_type varchar,
    extra_run integer
  );
```

**_populating the table_**

```sql
    INSERT INTO public.extras (extra_type, extra_run) 
    SELECT DISTINCT ipl_ball_by_ball.extra_type, ipl_ball_by_ball.extras_run 
    FROM ipl_ball_by_ball;

    ALTER TABLE public.extras ADD COLUMN extras_id SERIAL;

    UPDATE public.extras 
    SET extras_id = DEFAULT;

    UPDATE public.extras 
    SET extras_id = extras_id-22;

    ALTER TABLE public.extras ADD CONSTRAINT pk_extra PRIMARY KEY (extras_id);

    SELECT extras_id, extra_type, extra_run
    FROM public.extras;
```

**_public.wickets\_info_**

```sql
  CREATE TABLE public.wickets_info(
    kind varchar,
    player_out varchar,
    fielder_involved varchar
  );
```

**_populating the table_**

```sql
    INSERT INTO public.wickets_info (kind, player_out, fielder_involved) 
    SELECT DISTINCT ipl_ball_by_ball.kind, ipl_ball_by_ball.player_out, ipl_ball_by_ball.fielders_involved 
    FROM ipl_ball_by_ball;

    ALTER TABLE public.wickets_info ADD COLUMN wickets_info_id SERIAL;

    UPDATE public.wickets_info 
    SET wickets_info_id = DEFAULT;

    UPDATE public.wickets_info 
    SET wickets_info_id = wickets_info_id-8080;

    ALTER TABLE public.wickets_info ADD CONSTRAINT pk_wickets_info PRIMARY KEY (wickets_info_id);

    SELECT wickets_info_id, kind, player_out, fielder_involved
    FROM public.wickets_info order by wickets_info_id;
```

**_public.ball\_info_**

```sql
  CREATE TABLE public.ball_info(
    match_id integer,
    innings integer,
    overs integer,
    ball_number integer,
    extra_id integer,
    is_wicket_delivery integer,
    wicket_info_id integer,
    batter varchar,
    bowler varchar,
    nonstriker varchar,
    batsman_run integer,
    non_boundary integer,
    batting_team varchar,
    foreign key(extra_id) references extras(extras_id),
    foreign key(wicket_info_id) references wickets_info(wickets_info_id)
  );
```

**_populating the table_**

```sql
```
