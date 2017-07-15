1. Table Tansformation

SELECT * FROM flights
LIMIT 10;

2. Non-Correlated Subqueries I


SELECT * FROM flights
WHERE origin in (
	SELECT code 
  FROM airports
  WHERE elevation < 2000);
  
3. Non-Correlated Subqueries II

SELECT * 
FROM flights 
WHERE origin in (
    SELECT code 
    FROM airports 
    WHERE faa_region = 'ASO');
    
 4. Non-Correlated Subqueries III
 
SELECT a.dep_month,
a.dep_day_of_week,
AVG(a.flight_distance) AS average_distance 
FROM (
SELECT dep_month,
dep_day_of_week, 
dep_date,
SUM(distance) AS flight_distance
FROM flights
GROUP BY 1,2,3
) a
GROUP BY 1,2
ORDER BY 1,2;

5. Correlated Subqueries I

SELECT id 
FROM flights AS f
WHERE distance < ( 
   SELECT AVG(distance) 
   FROM flights
   WHERE carrier = f.carrier);

6. Correlated Subqueries II

SELECT origin, id,
 (SELECT COUNT(*)
    FROM flights f
        WHERE f.id < flights.id
          AND f.origin=flights.origin) + 1 
           AS flight_sequence_number
FROM flights;

7. Generalisations

/* Recap
- Subqueries are used to complete an SQL transformation by nesting one query within another query.

- A non-correlated subquery is a subquery that can be run independently of the outer query and can be used to complete a multi-step transformation.

- A correlated subquery is a subquery that cannot be run independently of the outer query. The order of operations in a correlated subquery is as follows:

1. A row is processed in the outer query.

2. Then, for that particular row in the outer query, the subquery is executed.
*/
