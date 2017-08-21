# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null
lname           | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
details     | text      |
asker_id    | integer   | not null, foreign key (references users), indexed

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
answer_id   | integer   | not null, foreign key (references answers), indexed

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique

## question_topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question_id | integer   | not null, foreign key (references questions), indexed, unique [topic_id]
topic_id    | integer   | not null, foreign key (references topics), indexed
