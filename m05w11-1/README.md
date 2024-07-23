# M05W11 - SQL Intro

### To Do
- [x] Introduction to RDBMS
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [x] Joining tables
- [x] Grouping records
- [x] Aggregation functions
- [x] `LIMIT` and `OFFSET`

Database => collection of tables

|ID|Menu Item|Price|Calories|
|---|---|---|---|
|1|Big Mac|5.99|850|
|2|Large Fries|4.55|1200|

|ID|Menu Item ID|
|---|---|
|1|1|
|2|1|

row => record
column => fields

Relational Database => each table is related to one or more other tables

Primary Key => unique identifiers
Foreign Key => one table's PK stored in another table

```js
const users = {
  abc: { id: 'abc' }
};

const urlDatabase = {
  b2XVn2: {
    longURL: 'http://...',
    userId: 'abc'
  }
};
```


client <==== tcp/http =====> web server <==== tcp/postgres =====> RDBMS

RDBMS => Relational DataBase Management Server/System
psql
\l
\c




























### SELECT Challenges

For the first 5 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users

```sql
SELECT COUNT(id) AS num_users
FROM users;
```

2. List users over the age of 18

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name 'Barrows'

```sql
SELECT *
FROM "users"
WHERE "age" > 18 AND last_name = 'Barrows';
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM "users"
WHERE "age" > 18 AND country = 'Canada'
ORDER BY age DESC, last_name ASC;
```

5. List users who live in Canada and whose accounts are overdue

```sql
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < 'July 22, 2024';

SELECT *, NOW()
FROM users
WHERE country = 'Canada' AND payment_due_date < NOW();

-- using the CURRENT_DATE variable
SELECT *
-- selecting everything from the users table
FROM users -- this is the users table
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

6. List all albums along with their songs

```sql
SELECT * 
FROM songs
JOIN albums ON songs.album_id = albums.id;
```

7. List all albums along with how many songs each album has

```sql
SELECT albums.*, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON songs.album_id = albums.id
GROUP BY albums.id;
```

8. Enhance previous query to only include albums that have more than 10 songs

```sql
SELECT albums.*, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON songs.album_id = albums.id
GROUP BY albums.id
HAVING COUNT(songs.id) > 10;
```

9. List ALL albums in the database, along with their songs if any

```sql
SELECT * 
FROM albums
LEFT JOIN songs ON songs.album_id = albums.id;
```

10. List ONLY the first 10 songs from the songs table

```sql
SELECT *
FROM songs
-- LIMIT 5 OFFSET 5
-- OFFSET 5 LIMIT 5
LIMIT 5
OFFSET 5;
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
