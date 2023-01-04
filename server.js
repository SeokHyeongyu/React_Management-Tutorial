const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id' : 1,
          'image' : 'https://placeimg.com/64/64/any',
          'name' : 'test111',
          'job' : '학생1'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/64/64/any',
          'name' : 'ABC11',
          'job' : '학생2'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/64/64/any',
          'name' : 'seok11',
          'job' : '학생3'
        }
      ]);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})