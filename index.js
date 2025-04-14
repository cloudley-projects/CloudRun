const express = require('express');
const app = express();

// Cloud Run injects the PORT environment variable.
// Default to 8080 for local development.
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const nodeVersion = process.version;
  console.log(`Received request at /. Responding with Node version: ${nodeVersion}`);
  res.status(200).send(`
    <h1>Hello from Cloud Run!</h1>
    <p>This app is running on Node.js version: <strong>${nodeVersion}</strong></p>
    <p>Requested version via package.json engines: Node 22</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Node.js version running: ${process.version}`);
  console.log('Press Ctrl+C to quit.');
});
