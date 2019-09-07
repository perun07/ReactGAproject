const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')

require('./db/db');


app.use(session({
  secret: 'It is ALIVE',
  resave: false,
  saveUninitialized: false
}));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

router.get('/', async (req,res, next) => {
  try {
    const allLocations = await locations.find();
    res.json({
      status:200,
      data: allLocations
    })
  } catch (err){
    res.send(err)
  }
})

const locationsController = require('./controllers/locationsController');
const locations = await fetch ('http:localhost:9000/api/vi/locations')
const locationsJson = await locations.json()

app.use('/api/v1/employee', locationsController);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
