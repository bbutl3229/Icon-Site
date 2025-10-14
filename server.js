const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Simple request logger (middleware)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()}  ${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

app.get('/specials', (req, res) => {
  res.render('pages/specials', { title: 'Specials' });
});

app.get('/usage', (req, res) => {
  res.render('pages/usage', { title: 'Usage' });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact' });
});

// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).render('pages/home', { title: 'Not Found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));