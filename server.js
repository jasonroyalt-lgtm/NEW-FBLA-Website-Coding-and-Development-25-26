const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/search', (req, res) => {
    res.render('search-item'); // This looks for views/search-item.ejs
});

app.listen(3000, () => console.log('View your page at http://localhost:3000/search'));
