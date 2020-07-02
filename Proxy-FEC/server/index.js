
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
//
// const calendarProxy = proxy('/calendar', {target: 'localhost:3001/calendar'});
// const reviewsProxy = proxy('/reviews', {target: 'localhost:3002/reviews'});
// const carouselProxy = proxy('/carousel', {target: 'localhost:3003/carousel'});
// const photosProxy = proxy('/photogallery', {target: 'localhost:3004/photogallery'});

// app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static('./client'));
app.use(bodyParser.json());

// app.all(calendarProxy)
// app.all(reviewsProxy);
// app.all(carouselProxy);
// app.all(photosProxy);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));