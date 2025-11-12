const express = require('express');
const client = require('prom-client');
const app = express();
const PORT = 3000;

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const requestCount = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests received',
});
register.registerMetric(requestCount);

app.get('/', (req, res) => {
  requestCount.inc();
  res.send('Hello from DevOps Test!');
  console.log('Request received on /');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
