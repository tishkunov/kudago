const express = require('express');
const bodyParser =  require('body-parser');
const axios = require('axios');
const { unixTimeRightNow, unixTimeTwoWeeks } = require('./../helpers/unixTimestamp');
const app = express();

const baseUrl = 'https://kudago.com/public-api/v1.4/events'

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/events', async (req, res) => {
	const result = await axios.get(`${baseUrl}/?page_size=100&order_by=id&location=spb&expand=place,dates&fields=place,id,dates,title,location,images&actual_since=${unixTimeRightNow}&actual_until=${unixTimeTwoWeeks}`)
						.catch(err => console.log(err));
	res.send(result.data.results);

})

app.post('/api/event', async (req, res) => {
	const result = await axios.get(`${baseUrl}/${req.body.id}/?lang=ru&fields=place,id,dates,title,location,images,description,body_text,site_url&expand=place,dates`)
						.catch(err => console.log(err));
						
	res.send(result.data);

})





app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
