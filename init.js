const express = require('express')
var AWSXRay = require('aws-xray-sdk');
const app = express()
const port = 3000

app.use(AWSXRay.express.openSegment('MyApp'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(AWSXRay.express.closeSegment());