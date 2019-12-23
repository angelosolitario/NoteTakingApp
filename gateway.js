const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const port = process.env.PORT || 3004;

const apiProxy = httpProxy.createProxyServer();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

apiProxy.on('error', (err, req, res) => {
  console.log(err)
  res.status(500).send('Proxy Error.WOnt work');
});

app.all("/notes*", (req, res) => {
  // service1
  console.log(req.path)
  apiProxy.web(req, res, {
    target: 'http://localhost:3001',
  });
});

app.all("/authserver*", (req, res) => {
  // service2
  apiProxy.web(req, res, {
    target: 'http://localhost:3002',
  });
});

app.all("*", (req, res) => {
  // front end server / react
  apiProxy.web(req, res, {
    target: 'http://localhost:4000',
  });
});

app.listen(port, () => console.log(`Gateway on port ${port}!`))