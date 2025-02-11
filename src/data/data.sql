CREATE TABLE IF NOT EXISTS users (
     id SERIAL PRIMARY KEY,
     name varchar(100) NOT NULL,
     email varchar(100) UNIQUE NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
 )