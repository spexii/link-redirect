import dotenv from 'dotenv';
import express from 'express';
import pg from "pg";

dotenv.config();

const app = express();

const client = new pg.Client({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
});

client.connect();

app.get('/:linkName', async (req, res) => {
    const { linkName } = req.params;

    try {
        // Fetch the row corresponding to the link name from the database
        const result = await client.query('SELECT * FROM links WHERE name = $1', [linkName]);

        if (result.rows.length > 0) {
            const link = result.rows[0];

            // If redirect is set for the link, perform the redirect
            if (link.redirect) {
                res.redirect(link.redirect);
            } else {
                // Otherwise, return a simple text response
                res.send(`Hello, ${linkName}`);
            }
        } else {
            // If no row is found, return a 404 Not Found
            res.status(404).send('404 Not Found');
        }
    } catch (error) {
        console.error('Error fetching link:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the Express server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});