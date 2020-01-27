const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {port, timezone} = require('./config');
const appConfig = require('./app.config');
const data = require('./data/stocks');

const getFilterRangeFn = ({range, field}) => (row) => {
    const {_min, _max} = range;
    const rowValue = new Date(row[field]);
    const minConditionIsGood = _min ? rowValue >= new Date(_min) : true;
    const maxConditionIsGood = _max ? rowValue <= new Date(_max) : true;

    return minConditionIsGood && maxConditionIsGood;
};

const app = express();

app.use(bodyParser.json());

app.get('/logo', (req, res) => res.sendFile(path.resolve('./logo.svg')));

app.get('/', (req, res) => res.json(appConfig));

app.post('/validate', (req, res) => res.json({name: 'Custom app with timezone'}));

app.post('/timezone', (req, res) => {
    // "account" is presented in req.body
    res.json({timeZone: timezone});
});

app.post('/', (req, res) => {
    // Timezone that is returned from /timezone endpoint is applied on date range.
    // For example, if timezone is '+03:00', min & max dates in date range will be in '+03:00' also (e.g. 2019-10-30T00:00:00.000+03:00)
    const range = req.body.filter['date'] || {};
    const resultData = data.filter(getFilterRangeFn({range, field: `date`}));

    res.json(resultData);
});

app.listen(port);
