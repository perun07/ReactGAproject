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

app.use((req,res,next)=>{
  console.log(req.session.user);
  next()
})


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
  optionsSuccessStatus: 200 
}

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}
));

app.use((req, res, next)=>{
  console.log(req.session.userId);
  next()
})



const locationsController = require('./controllers/locationsController');
const articlesController = require('./controllers/articlesController');
const usersController = require('./controllers/usersController');



app.use('/api/v1/locations', locationsController);
app.use('/api/v1/article', articlesController);
app.use('/api/v1/users', usersController)

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
