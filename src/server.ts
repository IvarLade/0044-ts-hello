import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files (HTML, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
