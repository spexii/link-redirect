-- init.sql
CREATE TABLE IF NOT EXISTS links (
    id SERIAL PRIMARY KEY,
    name text UNIQUE NOT NULL,
    favicon text,
    redirect text
);