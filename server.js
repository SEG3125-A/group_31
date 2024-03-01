const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

// Use cors middleware to allow cross-origin requests
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('.'));

// This line is necessary to parse the body of POST requests
app.use(express.urlencoded({ extended: true }));

app.get('/get_survey_data', (req, res) => {
    fs.readFile('survey_data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading survey data.');
        } else {
            res.send(data);
        }
    });
});


app.post('/submit_survey', (req, res) => {
    // Add a timestamp to the data
    req.body.timestamp = new Date();

    // Read the existing data from the file
    fs.readFile('survey_data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading survey data.');
        } else {
            // Parse the existing data
            let existingData = JSON.parse(data || '[]');

            // Check if existingData is an array, if not initialize it as an empty array
            if (!Array.isArray(existingData)) {
                existingData = [];
            }

            // Add the new data to the existing data
            existingData.push(req.body);

            // Convert the data to a string
            const dataString = JSON.stringify(existingData, null, 2);

            // Write the data back to the file
            fs.writeFile('survey_data.json', dataString, (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    res.status(500).send('Error saving survey data.');
                } else {
                    console.log('Saved survey data.');
                    // Redirect to the analyst page
                }
            });
        }
    });
});


app.listen(5501, () => console.log('Server listening on port 5501'));
