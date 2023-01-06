const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(routes);

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, './public/testOrderPage.html'))
});

app.post('/menu', (req, res) => {
    const order = req.body;
    const testArray = [];
      for (let key in order) {
        for (let key1 in order[key]) {
            console.log((order[key][key1]))
            testArray.push((order[key][key1]))
        }
      }
    console.log(testArray)
    console.log(testArray[0]);
      function createOrderTable() {
        //sequelize.query('DROP TABLE order_details;')
        sequelize.query('CREATE TABLE order_details (id INT AUTO_INCREMENT PRIMARY KEY,menu_item_name VARCHAR(255));')
      }
      createOrderTable();
      function seedOrderTable() {
      for (let i = 0; i < testArray.length; i++)
        sequelize.query(`INSERT INTO order_details (menu_item_name) VALUES ('${testArray[i]}');`)
      }
      seedOrderTable();
  }
  )

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });
