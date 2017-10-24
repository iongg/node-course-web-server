/**
 * Created by iong on 24.10.2017.
 */
import express = require('express');
import hbs = require('hbs');

let app = express();

let port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    let now = new Date().toString();
    console.log(`${now}: ${req.method}, ${req.url}`);
    next();
});

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());
app.get('/',(req, res) => {
    // res.send('<h1>Hello express</h1>')
    res.render('home.hbs', {
        pageTitle: 'Home page',
        message: 'Welcome',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about',(req, res) =>{
    res.render('about.hbs', {
        pageTitle: 'About page',
    });
});


app.listen(port, () => console.log(`Server listening on ${port}`));