const express = require('express');
const exphbs = require('express-handlebars');


const app = express();
//hbs middleware
app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine','handlebars');


//index route
app.get('/',(req,res)=>{
  const title = 'welcome1'
  res.render('index', { title });
});

//about route -- npm root -g
app.get('/about',(req,res)=>{
  res.render('about');
});

const port = 5000;

app.listen(port,()=>{
  console.log(`server run on ${port}`);
});