const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/:roomId/photogallery', createProxyMiddleware({ target: 'http://54.153.62.136/', changeOrigin: true }));
app.use('/api', createProxyMiddleware({ target: 'http://13.56.229.160/', changeOrigin: true }));
app.use('/:roomId/reviews', createProxyMiddleware({ target: 'http://3.19.228.235/', changeOrigin: true }));
app.use('/carousel', createProxyMiddleware({ target: 'http://3.129.64.149/', changeOrigin: true }));

app.listen(port, () => console.log(`Listening at http://localhost:${port}/`));
